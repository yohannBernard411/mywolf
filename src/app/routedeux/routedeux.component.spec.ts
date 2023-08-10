import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedeuxComponent } from './routedeux.component';

describe('RoutedeuxComponent', () => {
  let component: RoutedeuxComponent;
  let fixture: ComponentFixture<RoutedeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutedeuxComponent]
    });
    fixture = TestBed.createComponent(RoutedeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
