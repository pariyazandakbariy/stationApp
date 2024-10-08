import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHeaderComponent } from './core-header.component';

describe('CoreHeaderComponent', () => {
  let component: CoreHeaderComponent;
  let fixture: ComponentFixture<CoreHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreHeaderComponent]
    });
    fixture = TestBed.createComponent(CoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
