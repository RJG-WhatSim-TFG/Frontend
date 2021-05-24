import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'whatsim-chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  @Input() message: Message;
  @Input() arrow: Boolean;
  @Input() timemsg: Boolean = false;
  @Input() timedate: Date;

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  private formatMessageHour(message: Message): String {
    return this.datepipe.transform(message.time, 'HH:mm');
  }

  private formatDate(): String {
    return this.datepipe.transform(this.timedate, 'dd/MM/yyyy');
  }

}
