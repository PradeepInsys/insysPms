import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonindiprofileComponent } from './nonindiprofile.component';

describe('NonindiprofileComponent', () => {
  let component: NonindiprofileComponent;
  let fixture: ComponentFixture<NonindiprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonindiprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonindiprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
