import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCustomersMidComponent } from './sales-customers-mid.component';

describe('SalesCustomersMidComponent', () => {
  let component: SalesCustomersMidComponent;
  let fixture: ComponentFixture<SalesCustomersMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCustomersMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCustomersMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
