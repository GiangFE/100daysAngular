import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { ScAsideMonitorComponent } from './sc-aside-monitor/sc-aside-monitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ScSearchNonitorComponent } from './sc-search-nonitor/sc-search-nonitor.component';


@NgModule({
  declarations: [
    ScAsideMonitorComponent,
    ScSearchNonitorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MonitorRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [{
        name: 'required', message: "This field is required"
      }],
      types: [],
      extensions: [],
      wrappers: []
    })
  ]
})
export class MonitorModule { }
