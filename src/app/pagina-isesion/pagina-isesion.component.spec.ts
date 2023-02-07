import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIsesionComponent } from './pagina-isesion.component';

describe('PaginaIsesionComponent', () => {
  let component: PaginaIsesionComponent;
  let fixture: ComponentFixture<PaginaIsesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaIsesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaIsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
