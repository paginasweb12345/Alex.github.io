import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Programacion } from './programacion';

describe('Programacion', () => {
  let component: Programacion;
  let fixture: ComponentFixture<Programacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Programacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Programacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
