import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Class } from '../class-list/class';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ModalService } from './modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  form: FormGroup
  rooms: [];
  teams: [];
  contents: [];
  evaluations: [];

  selectedRoom: string;
  selectedTeam: string;
  selectedContent: string;
  selectedEvaluation: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Class[], private modalService: ModalService) {
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
      this.teams = response["data"];
    })
  }

  getContents() {
    this.modalService.getAllContents().subscribe(response => {
      this.contents = response["data"];
    })
  }

  ngOnInit(): void {
    this.getEvaluations();
    this.getContents();
    this.getRooms();
    this.getTeams();

    if (!!this.data) {
      this.selectedRoom = this.data["room"]["number"];
      this.selectedTeam = this.data["team"][0]["numero"];
      this.selectedEvaluation = this.data["evaluation"]["nome"];
      this.selectedContent = this.data["content"]["name"];

      this.form = new FormGroup({
        date: new FormControl(this.data["date"]),
        room: new FormControl(),
        description: new FormControl(this.data["description"]),
        evaluation: new FormControl(),
        team: new FormControl(),
        content: new FormControl(),
      });
    }
    else {
      this.form = new FormGroup({
        date: new FormControl(''),
        room: new FormControl(''),
        description: new FormControl(''),
        content: new FormControl(''),
        evaluation: new FormControl(''),
        team: new FormControl(''),
      });
    }
  }

  onSubmit(data, type) {
    event.preventDefault()
    const body = {
      date: data.date,
      room: data.room._id,
      description: data.description,
      content: data.content._id,
      evaluation: data.evaluation._id,
      team: data.team._id,
    }
    console.log(data)
    if(type == 'ADD') {  
      this.modalService.createClass(body).subscribe();
    }
    else if (type == 'EDIT') {
      this.modalService.updateClass(body, this.data["_id"]).subscribe();
    }
  }

}