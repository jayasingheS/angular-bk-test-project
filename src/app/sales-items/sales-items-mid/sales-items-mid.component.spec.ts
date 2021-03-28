import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesItemsMidComponent } from './sales-items-mid.component';

describe('SalesItemsMidComponent', () => {
  let component: SalesItemsMidComponent;
  let fixture: ComponentFixture<SalesItemsMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesItemsMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesItemsMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
