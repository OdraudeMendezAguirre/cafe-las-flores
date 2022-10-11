import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ItemNavbarComponent } from './item-navbar.component';

describe('ItemNavbarComponent', () => {
  let component: ItemNavbarComponent;
  let fixture: ComponentFixture<ItemNavbarComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ItemNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
