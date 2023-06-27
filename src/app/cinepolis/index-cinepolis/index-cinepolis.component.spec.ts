import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCinepolisComponent } from './index-cinepolis.component';

describe('IndexCinepolisComponent', () => {
  let component: IndexCinepolisComponent;
  let fixture: ComponentFixture<IndexCinepolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexCinepolisComponent]
    });
    fixture = TestBed.createComponent(IndexCinepolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
