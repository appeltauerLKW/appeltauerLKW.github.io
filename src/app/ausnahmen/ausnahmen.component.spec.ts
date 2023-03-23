import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusnahmenComponent } from './ausnahmen.component';

describe('AusnahmenComponent', () => {
  let component: AusnahmenComponent;
  let fixture: ComponentFixture<AusnahmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusnahmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AusnahmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
