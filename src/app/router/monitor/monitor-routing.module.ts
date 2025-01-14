import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScAsideMonitorComponent } from './sc-aside-monitor/sc-aside-monitor.component';
import { ScSearchNonitorComponent } from './sc-search-nonitor/sc-search-nonitor.component';

const routes: Routes = [
  {
    path: '',
    component: ScSearchNonitorComponent,
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
