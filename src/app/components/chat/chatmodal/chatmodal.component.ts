import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'whatsim-chatmodal',
  templateUrl: './chatmodal.component.html',
  styleUrls: ['./chatmodal.component.css']
})
export class ChatmodalComponent {


  constructor(
    public dialogRef: MatDialogRef<ChatmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      
    }

    titleValidator = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(22)]);
    profileValidator = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]);

    onNoClick(): void {
      this.dialogRef.close();
    }
}

