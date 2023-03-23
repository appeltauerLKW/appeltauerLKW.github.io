import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindestpreisComponent } from './mindestpreis.component';

describe('MindestpreisComponent', () => {
  let component: MindestpreisComponent;
  let fixture: ComponentFixture<MindestpreisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindestpreisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindestpreisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
