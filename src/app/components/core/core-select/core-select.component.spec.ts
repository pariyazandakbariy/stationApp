import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSelectComponent } from './core-select.component';

describe('CoreSelectComponent', () => {
  let component: CoreSelectComponent;
  let fixture: ComponentFixture<CoreSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreSelectComponent]
    });
    fixture = TestBed.createComponent(CoreSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
