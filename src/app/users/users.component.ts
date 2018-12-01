import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UsersService } from '../Service/users/users.service';
import { Observable } from 'rxjs';
import { Users } from '../Model/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Users>;
  users: Users[] = [];   
  constructor(private data: UsersService) {
   
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'username', 'email', 'phone', 'address', 'website', 'company','action'];

  ngOnInit() {
    this.GetUserList();
   
  }

  GetUserList() {
    this.data.GetUserList("https://jsonplaceholder.typicode.com/users").subscribe(user => {
      this.users = user;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
