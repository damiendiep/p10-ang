import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VignetteJoueurInconnuComponent } from './vignette-joueur-inconnu.component';

describe('VignetteJoueurInconnuComponent', () => {
  let component: VignetteJoueurInconnuComponent;
  let fixture: ComponentFixture<VignetteJoueurInconnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VignetteJoueurInconnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VignetteJoueurInconnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
