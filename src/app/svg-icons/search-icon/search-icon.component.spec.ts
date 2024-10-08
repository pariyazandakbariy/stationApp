import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSvgComponent } from './search-svg.component';

describe('SearchSvgComponent', () => {
  let component: SearchSvgComponent;
  let fixture: ComponentFixture<SearchSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSvgComponent]
    });
    fixture = TestBed.createComponent(SearchSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
