import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './router/login/login.component';
import { NotFonudComponent } from './router/not-fonud/not-fonud.component';
import { WelcomeComponent } from './router/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'welcome',
    loadChildren: () => import('./router/welcome/welcome.module')
    .then(m => m.WelcomeModule)
  },
  {
    path: 'monitor',
    loadChildren: () => import('./router/monitor/monitor.module')
    .then(m => m.MonitorModule)
  },
  {
    path: '**',
    component: NotFonudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
