import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsmapComponent } from './gpsmap.component';

describe('GpsmapComponent', () => {
  let component: GpsmapComponent;
  let fixture: ComponentFixture<GpsmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
