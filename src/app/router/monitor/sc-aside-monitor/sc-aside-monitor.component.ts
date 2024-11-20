import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sc-aside-monitor',
  templateUrl: './sc-aside-monitor.component.html',
  styleUrls: ['./sc-aside-monitor.component.scss']
})
export class ScAsideMonitorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
