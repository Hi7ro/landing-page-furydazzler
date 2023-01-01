import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copy2Component } from './copy2.component';

describe('Copy2Component', () => {
  let component: Copy2Component;
  let fixture: ComponentFixture<Copy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copy2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Copy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
