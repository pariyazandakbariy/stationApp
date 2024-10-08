import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreRadioButtonsComponent } from './core-radio-buttons.component';

describe('CoreRadioButtonsComponent', () => {
  let component: CoreRadioButtonsComponent;
  let fixture: ComponentFixture<CoreRadioButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreRadioButtonsComponent]
    });
    fixture = TestBed.createComponent(CoreRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
