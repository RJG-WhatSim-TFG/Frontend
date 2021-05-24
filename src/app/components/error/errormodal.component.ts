import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'whatsim-errormodal',
  templateUrl: './errormodal.component.html',
  styleUrls: ['./errormodal.component.css']
})
export class ErrormodalComponent{

  constructor(
    public dialogRef: MatDialogRef<ErrormodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
