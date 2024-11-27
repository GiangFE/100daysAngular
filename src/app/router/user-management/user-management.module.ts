import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management.component'
import {MatCardModule} from '@angular/material/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserManagementComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzPopconfirmModule,
    NzTableModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
