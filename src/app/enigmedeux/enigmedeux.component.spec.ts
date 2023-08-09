import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmedeuxComponent } from './enigmedeux.component';

describe('EnigmedeuxComponent', () => {
  let component: EnigmedeuxComponent;
  let fixture: ComponentFixture<EnigmedeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnigmedeuxComponent]
    });
    fixture = TestBed.createComponent(EnigmedeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
