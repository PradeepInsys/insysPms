import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinepaymentsComponent } from './onlinepayments.component';

describe('OnlinepaymentsComponent', () => {
  let component: OnlinepaymentsComponent;
  let fixture: ComponentFixture<OnlinepaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinepaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
