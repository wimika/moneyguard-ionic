import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypingPage } from './typing.page';

describe('TypingPage', () => {
  let component: TypingPage;
  let fixture: ComponentFixture<TypingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
