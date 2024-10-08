import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAutoCompleteComponent } from './core-auto-complete.component';

describe('CoreAutoCompleteComponent', () => {
  let component: CoreAutoCompleteComponent;
  let fixture: ComponentFixture<CoreAutoCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreAutoCompleteComponent]
    });
    fixture = TestBed.createComponent(CoreAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
