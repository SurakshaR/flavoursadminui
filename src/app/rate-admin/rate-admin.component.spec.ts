import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAdminComponent } from './rate-admin.component';

describe('RateAdminComponent', () => {
  let component: RateAdminComponent;
  let fixture: ComponentFixture<RateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
