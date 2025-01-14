import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormlyFieldSelect } from '@ngx-formly/bootstrap/select';
import { FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-select',
  templateUrl: './formly-select.component.html',
  styleUrls: ['./formly-select.component.scss']
})
export class FormlySelectComponent implements OnInit {

  formControl =  new FormControl('');
  showError =  new FormControl('');
  email =  new FormControl('');
  password =  new FormControl('');

  ngOnInit(): void {
  }

  field: FieldTypeConfig[] = [

  ]

}
