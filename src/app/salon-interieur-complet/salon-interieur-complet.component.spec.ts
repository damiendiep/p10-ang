import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonInterieurCompletComponent } from './salon-interieur-complet.component';

describe('SalonInterieurCompletComponent', () => {
  let component: SalonInterieurCompletComponent;
  let fixture: ComponentFixture<SalonInterieurCompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonInterieurCompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonInterieurCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
