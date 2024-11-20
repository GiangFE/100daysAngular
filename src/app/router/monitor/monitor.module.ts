import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';
import { ScAsideMonitorComponent } from './sc-aside-monitor/sc-aside-monitor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MonitorComponent,
    ScAsideMonitorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
