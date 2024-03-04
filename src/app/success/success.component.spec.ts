import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlert } from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessAlert;
  let fixture: ComponentFixture<SuccessAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessAlert]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
