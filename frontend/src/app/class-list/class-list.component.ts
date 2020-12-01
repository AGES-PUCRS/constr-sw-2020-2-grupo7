import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { ClassListService } from './class-list.service';
import { Class } from './class';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ConfirmComponent } from '../confirm/confirm.component';



// const ELEMENT_DATA: Class[] = [
//   {id: "1234", date: "2020-11-02", room: "203", description: "I.A.", content: "I.A.", evaluation:"TRUE", team: "128"},
//   {id: "1235", date: "2020-11-03", room: "204", description: "Grafos", content: "Grafos", evaluation:"FALSE", team: "227"},
//   {id: "1236", date: "2020-11-04", room: "205", description: "Paralela", content: "Paralela", evaluation:"FALSE", team: "203"},
//   {id: "1237", date: "2020-11-05", room: "206", description: "Distribuída", content: "Distribuída", evaluation:"TRUE", team: "127"}
// ];

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['date', 'room', 'description', 'content', 'evaluation', 'team', 'actions'];
  dataSource: MatTableDataSource<Class>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  
  constructor(private classListService: ClassListService, public dialog: MatDialog, public confirmDialog: MatDialog) {
    this.dataSource = new MatTableDataSource()
    this.paginator = null;
  }

  deleteClass(element: any) {
    console.log(element)
    let dialogRef = this.confirmDialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(cL => cL !== element);
        // Line commented to not remove the entry from database
        this.classListService.deleteClass(element._id).subscribe();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSpecific() {
    let classes = []
    try {
      this.classListService.getClasses().subscribe((response) => {
        // JSON.parse prevents typescript error
        JSON.parse(JSON.stringify(response)).data.map(item => {
          console.log(item)
          this.classListService.getSpecificClass(item._id).subscribe((response) => {
            console.log(response)
            const query = JSON.parse(JSON.stringify(response)).data
            const body = {
              content: query.content,
              date: query.date,
              evaluation: query.evaluation,
              description: query.description,
              room: query.room,
              team: query.team
            }
            console.log(body)
            classes.push(body)
            this.dataSource.data = classes
          })
        })
        console.log(response)
        this.dataSource.data = response['data']
      })
      return classes
    } catch(e) {
      console.log('error')
    }
  }

  ngOnInit(): void { 
    this.dataSource.data = this.getSpecific()
  }

  openDialog(data: Class[]) {
    // console.log(data)
    let dialogRef = this.dialog.open(ModalComponent, {data});

    // update dataSource
    dialogRef.afterClosed().subscribe(result => {
      this.getSpecific();
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
