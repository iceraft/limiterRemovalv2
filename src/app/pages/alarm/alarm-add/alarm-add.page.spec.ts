import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmAddPage } from './alarm-add.page';

describe('AlarmAddPage', () => {
  let component: AlarmAddPage;
  let fixture: ComponentFixture<AlarmAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
