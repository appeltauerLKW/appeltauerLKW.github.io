import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqualifikationskriterienComponent } from './disqualifikationskriterien.component';

describe('DisqualifikationskriterienComponent', () => {
  let component: DisqualifikationskriterienComponent;
  let fixture: ComponentFixture<DisqualifikationskriterienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisqualifikationskriterienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisqualifikationskriterienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
