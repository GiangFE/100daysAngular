import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MonitorService } from '../monitor.service';
import { of } from 'rxjs';
import { MonitorComponent } from '../monitor.component';

@Component({
  selector: 'app-sc-aside-monitor',
  templateUrl: './sc-aside-monitor.component.html',
  styleUrls: ['./sc-aside-monitor.component.scss']
})
export class ScAsideMonitorComponent implements OnInit {

  constructor(
    private router: Router,
    private monitorService: MonitorService
  ) { }


  ngOnInit(): void {
  }


  form = new FormGroup({});

  model: any = {
    province: '',
    district: '',
    precint: '',
    customerName: '',
    contactNo: '',
    sn: ''
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'province',
      type: 'select',
      props: {
        label: 'Province',
        value: 'value',
        options: this.monitorService.getProvince()
      },
    },
    {
      key: 'district',
      type: 'select',
      props: {
        label: 'District',
        value: 'value',
        options: this.monitorService.getDistrict()
      }
    },
    {
      key: 'precinct',
      type: 'select',
      props: {
        label: 'Precinct',
        value: 'value',
        options: this.monitorService.getPrecint()
      }
    },
    {
      key: 'customerName',
      type: 'input',
      props: {
        required: true,
        label: 'Customer name',
        value: 'value'
      }
    },
    {
      key: 'contactNo',
      type: 'input',
      props: {
        label: 'Contact no',
        value: 'value'
      }
    },
    {
      key: 'sn',
      type: 'input',
      props: {
        label: 'SN',
        type: 'number'
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
