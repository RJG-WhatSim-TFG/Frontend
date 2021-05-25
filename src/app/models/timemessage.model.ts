import { MessageType } from "./message.model";

export class TimeMessage{
    chatid: Number;
    time: Date
    type?: MessageType

    
    constructor(obj: any){
        this.chatid = obj.chatid;
        this.time = obj.time;
    }
}