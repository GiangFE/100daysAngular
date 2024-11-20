import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorComponent } from './monitor.component';
import { ScAsideMonitorComponent } from './sc-aside-monitor/sc-aside-monitor.component';

const routes: Routes = [
  {
    path: '',
    component: MonitorComponent,
  },
  {
    path: 'sc-aside-monitor',
    component: ScAsideMonitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
