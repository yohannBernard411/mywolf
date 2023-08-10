import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmourComponent } from './amour.component';

describe('AmourComponent', () => {
  let component: AmourComponent;
  let fixture: ComponentFixture<AmourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmourComponent]
    });
    fixture = TestBed.createComponent(AmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
