import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemFooterComponent } from './item-footer/item-footer.component';
import { ItemNavbarComponent } from './item-navbar/item-navbar.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';
import { PaginaOportunidadesComponent } from './pagina-oportunidades/pagina-oportunidades.component';
import { PaginaProductoComponent } from './pagina-producto/pagina-producto.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ItemNavbarComponent,
        ItemFooterComponent,
        ItemCardComponent,
        PaginaContactoComponent,
        PaginaNosotrosComponent,
        PaginaOportunidadesComponent,
        PaginaProductoComponent,
        PaginaTiendaComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cafe-flores'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cafe-flores');
  });

/*   it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cafe-flores app is running!');
  }); */
});
