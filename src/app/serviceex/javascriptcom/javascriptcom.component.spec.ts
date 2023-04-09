import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptcomComponent } from './javascriptcom.component';

describe('JavascriptcomComponent', () => {
  let component: JavascriptcomComponent;
  let fixture: ComponentFixture<JavascriptcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
