import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExComponent } from './binding-ex.component';

describe('BindingExComponent', () => {
  let component: BindingExComponent;
  let fixture: ComponentFixture<BindingExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
