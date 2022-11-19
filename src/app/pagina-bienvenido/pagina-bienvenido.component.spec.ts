import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBienvenidoComponent } from './pagina-bienvenido.component';

describe('PaginaBienvenidoComponent', () => {
  let component: PaginaBienvenidoComponent;
  let fixture: ComponentFixture<PaginaBienvenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaBienvenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBienvenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
