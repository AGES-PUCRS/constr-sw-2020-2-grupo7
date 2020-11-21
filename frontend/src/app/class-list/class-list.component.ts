import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { ClassListService } from './class-list.service';
import { Class } from './class';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})

export class ClassListComponent implements OnInit {

  classList: [Class];
  displayedColumns: string[] = ['date', 'room', 'description', 'team', 'evaluation', 'actions'];
  dataSource: MatTableDataSource<Class>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  
  constructor(private classListService: ClassListService) {
    this.dataSource = new MatTableDataSource()
    this.paginator = null;
  }

  getClasses() {
    this.classListService.getClasses().subscribe((classList) => {
      this.classList = classList;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getClasses();
    this.dataSource.data = this.classList;
    console.log(this.classList);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
