import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirrectiveExComponent } from './dirrective-ex.component';

describe('DirrectiveExComponent', () => {
  let component: DirrectiveExComponent;
  let fixture: ComponentFixture<DirrectiveExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirrectiveExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirrectiveExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
