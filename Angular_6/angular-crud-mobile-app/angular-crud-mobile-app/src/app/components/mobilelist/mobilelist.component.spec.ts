import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilelistComponent } from './mobilelist.component';

describe('MobilelistComponent', () => {
  let component: MobilelistComponent;
  let fixture: ComponentFixture<MobilelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
