import {TimeMessage} from './timemessage.model'
export type ChatMessage = Message | TimeMessage;

export class Message{
    chatid: Number;
    type: MessageType;
    time: Date;
    status: MessageStatus;
    content: String;

    /*constructor(chatid: number, type: MessageType | number, time: Date, status: MessageStatus | number, content: String){
        this.chatid = chatid;
        this.type = type;
        this.time = time;
        this.status = status;
        this.content = content;
    }*/

    constructor(obj: any){
        this.chatid = obj.chatid;
        this.time = obj.time;
        this.content = obj.content;
        this.type = MessageType[MessageType[+obj.type]];
        this.status = MessageStatus[MessageStatus[obj.status]];
    }
    /*

    private serialize(): any {
        var typ: Boolean;
        var stat: Number;
        if(this.type) typ = true;
        else typ = false;
        switch (this.status) {
            case "waiting":
                stat = 0;
                break;
            case "sended":
                stat = 1;
                break;
            case "recived":
                stat = 2;
                break;
            case "readed":
                stat = 3;
                break;
            default:
                stat = 0;
                break;
        }
        return {
            chatid: this.chatid,
            type: typ,
            time: stat,
            status: this.status,
            content: this.content

        }
    }*/

    public getType(): MessageType{
        return this.type;
    }

    public getTypeString(): String{
        return MessageType[this.type];
    }
}
export enum MessageType{
    SENDED = 1,
    RECIVED = 0
}
export enum MessageStatus{
    WAITING = 0,
    SENDED = 1,
    RECIVED = 2,
    READED = 3
}