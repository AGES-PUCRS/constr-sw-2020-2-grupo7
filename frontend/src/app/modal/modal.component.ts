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

  rooms: any;
  teams: any;
  contents: any;
  evaluations: [];

  form = new FormGroup({
    date: new FormControl('', [Validators.required]),
    room: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    evaluation: new FormControl('', [Validators.required]),
    team: new FormControl('', [Validators.required]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Class[], private modalService: ModalService,private dialogRef: MatDialogRef<ModalComponent>) {
    this.populate()
  }

  getRooms() {
    try {
      this.modalService.getAllRooms().subscribe(response => {
        this.rooms = response;
      })
    } catch (error) {
      console.log(error)
    }
  }

  getEvaluations() {
    try {
      this.modalService.getAllEvaluations().subscribe(response => {
        this.evaluations = response["data"];
      })
    } catch (error) {
      console.log(error)
    }
  }

  getTeams() {
    try {
      this.modalService.getAllTeams().subscribe(response => {
        this.teams = response;
      })
    } catch (error) {
      console.log(error)
    }
  }

  getContents() {
    try {
      this.modalService.getAllContents().subscribe(response => {
        this.contents = response;
      })
    } catch (error) {
      console.log(error)
    }
  }

  populate() {
    if(!!this.data){
      this.form.patchValue({
        room: this.data['room']._id,
        description: this.data['description'],
        content: this.data['content']._id,
        evaluation: this.data['evaluation']._id,
        team: this.data['team']._id,
      })
    }
  }

  ngOnInit(): void {
    this.getEvaluations();
    this.getContents();
    this.getRooms();
    this.getTeams();

  }

  onSubmit(data, type) {
    // event.preventDefault()
    const body = {
      room: this.form.value.room || 'undefined',
      description: this.form.value.description || 'undefined',
      content: this.form.value.content || 'undefined',
      evaluation: this.form.value.evaluation || 'undefined',
      team: this.form.value.team || 'undefined',
    }
  
    type === 'ADD' ? 
    this.modalService.createClass({ ...body, date: this.form.value.date }).subscribe() : 
    this.modalService.updateClass(body, this.data['id']).subscribe();

    this.dialogRef.close();
  }

}