import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDialogComponent } from './core-dialog.component';

describe('CoreDialogComponent', () => {
  let component: CoreDialogComponent;
  let fixture: ComponentFixture<CoreDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreDialogComponent]
    });
    fixture = TestBed.createComponent(CoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
