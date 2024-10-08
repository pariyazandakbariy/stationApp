import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCardComponent } from './core-card.component';

describe('CoreCardComponent', () => {
  let component: CoreCardComponent;
  let fixture: ComponentFixture<CoreCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreCardComponent]
    });
    fixture = TestBed.createComponent(CoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
