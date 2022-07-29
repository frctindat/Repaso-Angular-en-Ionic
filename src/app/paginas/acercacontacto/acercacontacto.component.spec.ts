import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercacontactoComponent } from './acercacontacto.component';

describe('AcercacontactoComponent', () => {
  let component: AcercacontactoComponent;
  let fixture: ComponentFixture<AcercacontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercacontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercacontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
