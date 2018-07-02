import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VignetteJoueurTrouveComponent } from './vignette-joueur-trouve.component';

describe('VignetteJoueurTrouveComponent', () => {
  let component: VignetteJoueurTrouveComponent;
  let fixture: ComponentFixture<VignetteJoueurTrouveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VignetteJoueurTrouveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VignetteJoueurTrouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
