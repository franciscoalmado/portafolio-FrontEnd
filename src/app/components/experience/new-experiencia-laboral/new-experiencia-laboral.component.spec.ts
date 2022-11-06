import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExperienciaLaboralComponent } from './new-experiencia-laboral.component';

describe('NewExperienciaLaboralComponent', () => {
  let component: NewExperienciaLaboralComponent;
  let fixture: ComponentFixture<NewExperienciaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExperienciaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
