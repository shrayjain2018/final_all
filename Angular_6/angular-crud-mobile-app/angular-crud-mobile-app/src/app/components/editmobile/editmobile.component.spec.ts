import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmobileComponent } from './editmobile.component';

describe('EditmobileComponent', () => {
  let component: EditmobileComponent;
  let fixture: ComponentFixture<EditmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
