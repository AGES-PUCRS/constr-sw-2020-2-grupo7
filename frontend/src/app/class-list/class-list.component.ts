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

  displayedColumns: string[] = ['date', 'room', 'description', 'team', 'actions'];
  dataSource: MatTableDataSource<Class>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  
  constructor(private classListService: ClassListService) {
    this.dataSource = new MatTableDataSource()
    this.paginator = null;
  }

  deleteClass(element: any) {
    this.dataSource.data = this.dataSource.data.filter(cL => cL !== element);
    // Line commented to not remove the entry from database
    // this.classListService.deleteClass(element.id).subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.classListService.getClasses().subscribe((response) => {
      // JSON.parse prevents typescript error
      this.dataSource.data = JSON.parse(JSON.stringify(response)).data
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
