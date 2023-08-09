import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideomessageComponent } from './videomessage.component';

describe('VideomessageComponent', () => {
  let component: VideomessageComponent;
  let fixture: ComponentFixture<VideomessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideomessageComponent]
    });
    fixture = TestBed.createComponent(VideomessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
