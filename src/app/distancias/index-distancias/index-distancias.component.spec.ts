import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDistanciasComponent } from './index-distancias.component';

describe('IndexDistanciasComponent', () => {
  let component: IndexDistanciasComponent;
  let fixture: ComponentFixture<IndexDistanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexDistanciasComponent]
    });
    fixture = TestBed.createComponent(IndexDistanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
