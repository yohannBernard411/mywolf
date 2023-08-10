import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmetroisComponent } from './enigmetrois.component';

describe('EnigmetroisComponent', () => {
  let component: EnigmetroisComponent;
  let fixture: ComponentFixture<EnigmetroisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnigmetroisComponent]
    });
    fixture = TestBed.createComponent(EnigmetroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
