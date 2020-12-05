import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  title: string;
  buttonText1: string;
  buttonText2: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      buttonText1: string;
      buttonText2: string;
    },
  ) { 
    this.title = this.data.title;
    this.buttonText1 = this.data.buttonText1;
    this.buttonText2 = this.data.buttonText2;
   }

  ngOnInit(): void {
  }

}
