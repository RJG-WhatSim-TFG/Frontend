import { Message } from 'src/app/models/message.model';
export class ChatDetail{
    id: number;
    title: string;
    creationtime: Date;
    profilepic?: any;
    profilename: string;
    messages?: Message[];

    constructor(obj: any){
        this.id = obj.id;
        this.title = obj.title;
        this.creationtime = obj.creationtime;
        this.profilepic = obj.profilepic;
        this.profilename = obj.profilename;
    }
}