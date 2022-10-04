import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRegistroSignosVitalesComponent } from './modificar-registro-signos-vitales.component';

describe('ModificarRegistroSignosVitalesComponent', () => {
  let component: ModificarRegistroSignosVitalesComponent;
  let fixture: ComponentFixture<ModificarRegistroSignosVitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRegistroSignosVitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRegistroSignosVitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
