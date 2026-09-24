import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencialComponent } from './emergencial.component';

describe('EmergencialComponent', () => {
  let component: EmergencialComponent;
  let fixture: ComponentFixture<EmergencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
