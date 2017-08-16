import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesanddiscountComponent } from './ratesanddiscount.component';

describe('RatesanddiscountComponent', () => {
  let component: RatesanddiscountComponent;
  let fixture: ComponentFixture<RatesanddiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesanddiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesanddiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
