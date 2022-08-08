import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadaPosteoComponent } from './cada-posteo.component';

describe('CadaPosteoComponent', () => {
  let component: CadaPosteoComponent;
  let fixture: ComponentFixture<CadaPosteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadaPosteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadaPosteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
