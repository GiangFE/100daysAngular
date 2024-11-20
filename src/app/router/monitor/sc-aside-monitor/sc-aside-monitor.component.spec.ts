import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScAsideMonitorComponent } from './sc-aside-monitor.component';

describe('ScAsideMonitorComponent', () => {
  let component: ScAsideMonitorComponent;
  let fixture: ComponentFixture<ScAsideMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScAsideMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScAsideMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
