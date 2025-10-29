import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aspiraciones } from './aspiraciones';

describe('Aspiraciones', () => {
  let component: Aspiraciones;
  let fixture: ComponentFixture<Aspiraciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aspiraciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aspiraciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
