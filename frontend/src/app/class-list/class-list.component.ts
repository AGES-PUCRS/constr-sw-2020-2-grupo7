import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { ClassListService } from './class-list.service';
import { Class } from './class';

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

  classList: Class[];
  displayedColumns: string[] = ['date', 'room', 'description', 'team', 'actions'];
  dataSource: MatTableDataSource<Class>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  
  constructor(private classListService: ClassListService) {
    this.dataSource = new MatTableDataSource()
    this.paginator = null;
  }

  getClasses() {
    this.classListService.getClasses().subscribe((classList) => {
      console.log(classList);
      this.classList = classList;
    })
  }

  deleteClass(element: any) {
    this.classList = this.classList.filter(cL => cL !== element);
    this.classListService.deleteClass(element.id).subscribe();
    this.dataSource.data = this.classList;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getClasses();
    console.log(this.classList);
    // this.classList = ELEMENT_DATA;
    this.dataSource.data = this.classList;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
