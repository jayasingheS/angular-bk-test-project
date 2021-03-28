import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEstimateMidComponent } from './sales-estimate-mid.component';

describe('SalesEstimateMidComponent', () => {
  let component: SalesEstimateMidComponent;
  let fixture: ComponentFixture<SalesEstimateMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEstimateMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesEstimateMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
