import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      props: {
        required: true,
        type: 'text',
        label: 'First name',
      },
    },
    {
      key: 'address',
      wrappers: ['monitor'],
      props: { label: 'Address' },
      fieldGroup: [{
        key: 'town',
        type: 'input',
        props: {
          required: true,
          type: 'text',
          label: 'Town'
        }
      }]
    }

  ]

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

}
