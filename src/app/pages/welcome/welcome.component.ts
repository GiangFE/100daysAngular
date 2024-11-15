import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isCollapsed = false;
  nzGhost = true;
  validateForm!: UntypedFormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut(): void {
    console.log('login');
    if (this.validateForm.valid) { //.valid là thuộc tính kiểm tra tính hợp lệ của form.
      console.log('logout', this.validateForm.value); //this.validateForm.value trả về dữ liệu của form (tức là giá trị của tất cả các trường trong form).
      // Thực hiện các thao tác đăng xuất, ví dụ:
      localStorage.removeItem('userToken');
      this.router.navigate(['/login'])
    } else {
      console.log('Không thoát đăng nhập được!!!');

    }
    this.router.navigate(['/login'])

  }

}
