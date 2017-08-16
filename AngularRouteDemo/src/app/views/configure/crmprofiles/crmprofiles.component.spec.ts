import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmprofilesComponent } from './crmprofiles.component';

describe('CrmprofilesComponent', () => {
  let component: CrmprofilesComponent;
  let fixture: ComponentFixture<CrmprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
