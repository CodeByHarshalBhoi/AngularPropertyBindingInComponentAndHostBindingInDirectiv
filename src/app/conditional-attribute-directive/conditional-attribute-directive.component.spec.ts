import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalAttributeDirectiveComponent } from './conditional-attribute-directive.component';

describe('ConditionalAttributeDirectiveComponent', () => {
  let component: ConditionalAttributeDirectiveComponent;
  let fixture: ComponentFixture<ConditionalAttributeDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalAttributeDirectiveComponent]
    });
    fixture = TestBed.createComponent(ConditionalAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
