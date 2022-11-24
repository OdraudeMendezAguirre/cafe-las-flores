import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExitoComponent } from './pagina-exito.component';

describe('PaginaExitoComponent', () => {
  let component: PaginaExitoComponent;
  let fixture: ComponentFixture<PaginaExitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaExitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
