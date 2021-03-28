import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMidComponent } from './sales-mid.component';

describe('SalesMidComponent', () => {
  let component: SalesMidComponent;
  let fixture: ComponentFixture<SalesMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
