import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcomComponent } from './angularcom.component';

describe('AngularcomComponent', () => {
  let component: AngularcomComponent;
  let fixture: ComponentFixture<AngularcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
