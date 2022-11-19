import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIndexComponent } from './pagina-index.component';

describe('PaginaIndexComponent', () => {
  let component: PaginaIndexComponent;
  let fixture: ComponentFixture<PaginaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
