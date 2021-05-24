import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';
import { ChatService } from '../../../services/chat.service';
import { DatePipe } from '@angular/common'
import { ConfirmationComponent } from '../../modals/confirmation/confirmation.component';
import {ChatmodalComponent} from '../chatmodal/chatmodal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {

  chats: Chat[];

  hasError = false;
  errorShort: String;
  errorLong: String;

  constructor(private chatService: ChatService,public datepipe: DatePipe,public dialog: MatDialog) { }

  private loadChats(){
    this.chatService.getAll().subscribe(
      data =>{
        this.chats = data.chats;
    }, err => {
      console.log(err);
      this.hasError = true;
      this.errorShort = err.error.error;
      this.errorLong = err.error.message;
    }
    );
  }

  ngOnInit(): void {
    this.loadChats();
  }

  private formatCreationTime(chat: Chat): String {
    return this.datepipe.transform(chat.creationtime, 'dd/MM/yyyy HH:mm');
  }

  private deleteInDb(chat: Chat): void{
    this.chatService.delete(chat.id).subscribe(
        data =>{
        console.log(data);
        this.loadChats();
      }, err => {
        console.log(err);
        this.hasError = true;
        this.errorShort = err.error.error;
        this.errorLong = err.error.message;
      }
    );
  }

  private showDeleteConfirmation(chat: Chat): void{
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {description: "¿Deséas eliminar permanentemente el chat?", deletion: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==="confirm"){
        this.deleteInDb(chat);
      }
    });
  }

  private editInDb(chat: Chat, data: any): void{
    this.chatService.update(chat.id, data).subscribe(
        data =>{
        this.loadChats();
      }, err => {
        console.log(err);
        this.hasError = true;
        this.errorShort = err.error.error;
        this.errorLong = err.error.message;
      }
    );
  }

  private createInDb(data: any): void{
    this.chatService.create(data).subscribe(
        data =>{
        this.loadChats();
      }, err => {
        console.log(err);
        this.hasError = true;
        this.errorShort = err.error.error;
        this.errorLong = err.error.message;
      }
    );
  }


  private showEditModal(chat: Chat): void{
    const dialogRef = this.dialog.open(ChatmodalComponent, {
      data: {chat: Object.create(chat)}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let editedChat:Chat = result;
        this.editInDb(chat, editedChat);
      }
    });
  }

  public showCreationModal(): void{
    const dialogRef = this.dialog.open(ChatmodalComponent, {
      data: {chat: {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let newChat:Chat = result;
        this.createInDb(newChat);
      }
    });
  }

}
