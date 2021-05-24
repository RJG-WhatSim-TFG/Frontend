import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-messagemodal',
  templateUrl: './messagemodal.component.html',
  styleUrls: ['./messagemodal.component.css']
})
export class MessagemodalComponent {

  locked:Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MessagemodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.locked = data.message.type!=null && data.message.time!=null;
    }

    typeValidator = new FormControl('', [Validators.required]);
    statusValidator = new FormControl('', [Validators.required]);
    timeValidator = new FormControl('', [Validators.required]);
    
    onNoClick(): void {
      this.dialogRef.close();
    }

}
