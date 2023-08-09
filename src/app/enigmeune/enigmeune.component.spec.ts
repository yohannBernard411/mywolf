import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeuneComponent } from './enigmeune.component';

describe('EnigmeuneComponent', () => {
  let component: EnigmeuneComponent;
  let fixture: ComponentFixture<EnigmeuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnigmeuneComponent]
    });
    fixture = TestBed.createComponent(EnigmeuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
