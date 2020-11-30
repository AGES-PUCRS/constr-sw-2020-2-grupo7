import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Class } from '../class-list/class';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from './modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  form: FormGroup
  rooms: [];
  teams: any;
  contents: any;
  evaluations: [];

  selectedRoom: string;
  selectedTeam: string;
  selectedContent: string;
  selectedEvaluation: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Class[], private modalService: ModalService,private dialogRef: MatDialogRef<ModalComponent>) {
    // console.log(data)
  }

  getRooms() {
    this.modalService.getAllRooms().subscribe(response => {
      this.rooms = response["data"];
    })
  }

  getEvaluations() {
    this.modalService.getAllEvaluations().subscribe(response => {
      this.evaluations = response["data"];
    })
  }

  getTeams() {
    this.modalService.getAllTeams().subscribe(response => {
      this.teams = response;
    })
  }

  getContents() {
    this.modalService.getAllContents().subscribe(response => {
      this.contents = response;
    })
  }

  ngOnInit(): void {
    this.getEvaluations();
    this.getContents();
    this.getRooms();
    this.getTeams();

    if (!!this.data) {
      this.selectedRoom = this.data["room"];
      this.selectedTeam = this.data["team"];
      this.selectedEvaluation = this.data["evaluation"];
      this.selectedContent = this.data["content"];

      this.form = new FormGroup({
        date: new FormControl(this.data["date"], [Validators.required]),
        room: new FormControl(),
        description: new FormControl(this.data["description"], [Validators.required]),
        evaluation: new FormControl(),
        team: new FormControl(),
        content: new FormControl(),
      });
    }
    else {
      this.form = new FormGroup({
        date: new FormControl('', [Validators.required]),
        room: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
        evaluation: new FormControl('', [Validators.required]),
        team: new FormControl('', [Validators.required]),
      });
    }
  }

  onSubmit(data, type) {
    // event.preventDefault()
    // console.log(data)
    // console.log(this.selectedRoom)
    
    if(type == 'ADD') {  

      const body = {
        date: data.date,
        room: data.room._id,
        description: data.description,
        content: data.content._id,
        evaluation: data.evaluation._id,
        team: data.team._id,
      }

      console.log(body)

      const response = this.modalService.createClass(body).subscribe();
      console.log(response)
    }
    else if (type == 'EDIT') {
      const body = {
        date: data.date,
        room: this.selectedRoom['_id'],
        description: data.description,
        content: this.selectedContent['_id'],
        evaluation: this.selectedRoom['_id'],
        team: this.selectedTeam['_id'],
      }

      // this.modalService.updateClass(body, this.data["_id"]).subscribe();
    }

    this.dialogRef.close();
  }

}