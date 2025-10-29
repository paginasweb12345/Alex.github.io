import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaamigos } from './listaamigos';

describe('Listaamigos', () => {
  let component: Listaamigos;
  let fixture: ComponentFixture<Listaamigos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listaamigos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listaamigos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
