import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOportunidadesComponent } from './pagina-oportunidades.component';

describe('PaginaOportunidadesComponent', () => {
  let component: PaginaOportunidadesComponent;
  let fixture: ComponentFixture<PaginaOportunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaOportunidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOportunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
