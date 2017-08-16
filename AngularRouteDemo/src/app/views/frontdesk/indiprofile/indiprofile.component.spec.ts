import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiprofileComponent } from './indiprofile.component';

describe('IndiprofileComponent', () => {
  let component: IndiprofileComponent;
  let fixture: ComponentFixture<IndiprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
