import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenzuordnungComponent } from './kundenzuordnung.component';

describe('KundenzuordnungComponent', () => {
  let component: KundenzuordnungComponent;
  let fixture: ComponentFixture<KundenzuordnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KundenzuordnungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundenzuordnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
