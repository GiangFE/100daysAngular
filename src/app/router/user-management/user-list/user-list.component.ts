import { UserMasterService } from './../../service/user-master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: any;
  dataSource: any[] = [];

  constructor(
    private service: UserMasterService
  ) {}

  ngOnInit(): void {
    this.getAllUser();
    console.log(this.userList)
  }

  getAllUser() {
    this.service.getAllUser().subscribe(item => {
      this.userList = item
      console.log(this.userList)
      this.dataSource = this.userList.results
    })
  }

  displayedColumns: string[] = [
    'gender', 'name', 'location', 'email', 'login', 'dob', 'registered', 'phone', 'cell', 'id', 'picture', 'nat'
  ];
  // dataSource = ELEMENT_DATA;

}
