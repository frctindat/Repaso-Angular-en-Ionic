import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteoasyncComponent } from './posteoasync.component';

describe('PosteoasyncComponent', () => {
  let component: PosteoasyncComponent;
  let fixture: ComponentFixture<PosteoasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteoasyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteoasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
