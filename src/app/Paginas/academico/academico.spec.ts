import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Academico } from './academico';

describe('Academico', () => {
  let component: Academico;
  let fixture: ComponentFixture<Academico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Academico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Academico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
