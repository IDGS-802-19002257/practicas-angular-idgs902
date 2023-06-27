import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexResistenciasComponent } from './index-resistencias.component';

describe('IndexResistenciasComponent', () => {
  let component: IndexResistenciasComponent;
  let fixture: ComponentFixture<IndexResistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexResistenciasComponent]
    });
    fixture = TestBed.createComponent(IndexResistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
