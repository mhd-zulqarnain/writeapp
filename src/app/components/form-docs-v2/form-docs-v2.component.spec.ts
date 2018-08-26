import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDocsV2Component } from './form-docs-v2.component';

describe('FormDocsV2Component', () => {
  let component: FormDocsV2Component;
  let fixture: ComponentFixture<FormDocsV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDocsV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDocsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
