import { Component, OnInit, NgZone, ViewChild} from '@angular/core';
import { ChatMessage, Message, MessageStatus } from 'src/app/models/message.model';
import { ChatService } from '../../../services/chat.service';
import { MessageService } from '../../../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatDetail } from 'src/app/models/chatdetailed.model';
import {MessagemodalComponent} from '../message/messagemodal.component';
import { ConfirmationComponent } from '../../modals/confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';

import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { TimeMessage } from 'src/app/models/timemessage.model';

@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.component.html',
  styleUrls: ['./chatdetail.component.css']
})
export class ChatdetailComponent implements OnInit {

  chat: ChatDetail;

  hasError = false;
  errorShort: String;
  errorLong: String;

  msgContent: String = "";
  loaded: Boolean = false;
  chatMessages:ChatMessage[] = [];

  
  constructor(private chatService: ChatService, private messageService: MessageService, private _ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog) { }

    @ViewChild('autosize') autosize: CdkTextareaAutosize;

    triggerResize() {
      // Wait for changes to be applied, then trigger textarea resize.
      this._ngZone.onStable.pipe(take(1))
          .subscribe(() => this.autosize.resizeToFitContent(true));
    }


  ngOnInit(): void {
    this.loadChat(this.route.snapshot.params.id);
  }

  private isTimeMessage(message:ChatMessage){
    return message instanceof TimeMessage;
  }

  private hasArrow(message:ChatMessage, ind:number){
    return (ind==0 && !this.isTimeMessage(message) || (ind>0 && (!this.isTimeMessage(message) && (this.isTimeMessage(this.chatMessages[ind-1]) 
    || (this.chatMessages[ind-1].type!=message.type) ))));
  }


  private loadChat(id): void{
    this.loaded = false;
    this.chatMessages = [];
    this.chatService.getDetail(id).subscribe(
      data =>{
        let jsonMsgs = data.chat.messages;
        let msgs:Message[] = [];
        for(let m of jsonMsgs){
          var ind = jsonMsgs.indexOf(m);
          console.log(ind);
          if(ind==0){
            var cmsg:TimeMessage = new TimeMessage({chatid: id, time: m.time});
            this.chatMessages.push(cmsg);
          }else{
            var previousMsg:Message = new Message(jsonMsgs[ind-1]);
            console.log(previousMsg);
            if(this.getDaysDifference(new Date(previousMsg.time), new Date(m.time))>=1){
              var cmsg:TimeMessage = new TimeMessage({chatid: id, time: m.time});
              this.chatMessages.push(cmsg);
            }
          }
          /*if(ind>0)console.log("previous msg: "+JSON.stringify(jsonMsgs[ind-1]));
          if(ind==0 || (ind>0 && (this.getDaysDifference(jsonMsgs[ind-1].time, m.time)>=1)) ){
            var cmsg:TimeMessage = {chatid: id, time: m.time};
            this.chatMessages.push(cmsg);
          }*/
          var msg:Message = new Message(m);
          msgs.push(msg);
          this.chatMessages.push(msg);
        }
        this.chat = new ChatDetail(data.chat);
        this.chat.messages = msgs;
        console.log(this.chat);
        console.log(this.chatMessages);
        this.loaded = true;
    }, err => {
      console.log(err);
      this.hasError = true;
      this.errorShort = err.error.error;
      this.errorLong = err.error.message;
      this.loaded = true;
    }
    );
  }

  private getDaysDifference(date1: Date, date2: Date): Number{
    return (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
  }

  private createInDb(data: any): void{
    this.messageService.create(data).subscribe(
        data =>{
          this.loadChat(this.chat.id);
      }, err => {
        console.log(err);
        this.hasError = true;
        this.errorShort = err.error.error;
        this.errorLong = err.error.message;
      }
    );
  }


  public showNewModal(): void{
    if(this.msgContent!==""){
      const dialogRef = this.dialog.open(MessagemodalComponent, {
        data: {message: {}}
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          console.log(result);
          let newMessage:Message = new Message(result);
          newMessage.chatid = this.chat.id;
          newMessage.content =this.msgContent;
  
          console.log(newMessage);
          this.createInDb(newMessage);
          this.msgContent = "";
        }
      });
    }

  }

}
