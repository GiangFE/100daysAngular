import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';
import { ScAsideMonitorComponent } from './sc-aside-monitor/sc-aside-monitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    MonitorComponent,
    ScAsideMonitorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonitorRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot()
  ],
})
export class MonitorModule { }
