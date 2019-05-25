import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorre03Component } from './ocorre03.component';

describe('Ocorre03Component', () => {
  let component: Ocorre03Component;
  let fixture: ComponentFixture<Ocorre03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorre03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorre03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
