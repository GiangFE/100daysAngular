import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';
import { ScAsideMonitorComponent } from './sc-aside-monitor/sc-aside-monitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MonitorComponent,
    ScAsideMonitorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
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
  ],
})
export class MonitorModule { }
