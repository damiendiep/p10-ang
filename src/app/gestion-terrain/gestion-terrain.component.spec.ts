import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTerrainComponent } from './gestion-terrain.component';

describe('GestionTerrainComponent', () => {
  let component: GestionTerrainComponent;
  let fixture: ComponentFixture<GestionTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
