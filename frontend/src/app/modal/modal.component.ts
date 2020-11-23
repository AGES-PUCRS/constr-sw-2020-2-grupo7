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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Class[], private modalService: ModalService) {
    console.log(data)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(this.data.date),
      room: new FormControl(this.data.room.number),
      description: new FormControl(this.data.description),
      content: new FormControl(this.data.content.name),
      evaluation: new FormControl(this.data.evaluation.nome),
      team: new FormControl(this.data.team[0].numero),
    });
  }

  
  

  onSubmit(data) {
    event.preventDefault()
    console.log(data)
    const object = {
      date: data.date,
      room: data.room,
      description: data.description,
      content: data.content,
      evaluation: data.evaluation,
      team: data.team,
    }

    const response = this.modalService.updateClass(object, this.data._id).subscribe();
    console.log(response)

  }

}