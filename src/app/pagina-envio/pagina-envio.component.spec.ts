import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEnvioComponent } from './pagina-envio.component';

describe('PaginaEnvioComponent', () => {
  let component: PaginaEnvioComponent;
  let fixture: ComponentFixture<PaginaEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEnvioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
