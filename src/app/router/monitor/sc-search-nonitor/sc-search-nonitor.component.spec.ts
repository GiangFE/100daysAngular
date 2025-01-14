import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSearchNonitorComponent } from './sc-search-nonitor.component';

describe('ScSearchNonitorComponent', () => {
  let component: ScSearchNonitorComponent;
  let fixture: ComponentFixture<ScSearchNonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScSearchNonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScSearchNonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
