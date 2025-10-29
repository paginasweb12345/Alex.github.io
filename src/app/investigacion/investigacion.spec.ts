import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Investigacion } from './investigacion';

describe('Investigacion', () => {
  let component: Investigacion;
  let fixture: ComponentFixture<Investigacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Investigacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Investigacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
