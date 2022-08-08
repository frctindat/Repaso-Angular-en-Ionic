import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPosteosComponent } from './lista-posteos.component';

describe('ListaPosteosComponent', () => {
  let component: ListaPosteosComponent;
  let fixture: ComponentFixture<ListaPosteosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPosteosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPosteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
