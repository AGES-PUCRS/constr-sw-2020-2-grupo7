import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  date: string;
  room: number;
  description: string;
  class: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2020/11/18', room: 502, description: 'Grafos', class: 128},
  {date: '2020/10/12', room: 262, description: 'I.A.', class: 102},
  {date: '2020/11/03', room: 901, description: 'Construção', class: 230},
  {date: '2020/11/18', room: 502, description: 'Grafos', class: 128},
  {date: '2020/10/12', room: 262, description: 'I.A.', class: 102},
  {date: '2020/11/03', room: 901, description: 'Construção', class: 230},
  {date: '2020/11/18', room: 502, description: 'Grafos', class: 128},
  {date: '2020/10/12', room: 262, description: 'I.A.', class: 102},
  {date: '2020/11/03', room: 901, description: 'Construção', class: 230},
];

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ['date', 'room', 'description', 'class', 'actions'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  
  constructor() {
    this.dataSource = new MatTableDataSource()
    this.paginator = null;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource.data = ELEMENT_DATA
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
