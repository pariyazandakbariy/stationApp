import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreExpandableCardComponent } from './core-expandable-card.component';

describe('CoreExpandableCardComponent', () => {
  let component: CoreExpandableCardComponent;
  let fixture: ComponentFixture<CoreExpandableCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreExpandableCardComponent]
    });
    fixture = TestBed.createComponent(CoreExpandableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
