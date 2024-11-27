import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styles: [
  ]
})
export class UserManagementComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  test() {
    console.log(123);
    this.router.navigate(['user-management/user-details'])
  }

}
