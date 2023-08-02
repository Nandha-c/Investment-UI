import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent]
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should initialize the form with empty fields', () => {
    expect(component.signinForm.get('emailIdText')?.value).toBe('');
    expect(component.signinForm.get('passwordText')?.value).toBe('');
  });
  
  it('should enable the "SIGN IN" button when the form is valid', () => {
    component.signinForm.patchValue({
      emailIdText: 'example@kanini.com',
      passwordText: 'Password@123',
    });
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button-signin');
    expect(button.disabled).toBe(false);
  });
  
  it('should disable the "SIGN IN" button when the form is invalid', () => {
    component.signinForm.patchValue({
      emailIdText: '',
      passwordText: '',
    });
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.button-signin');
    expect(button.disabled).toBe(true);
  });
  
  it('should display an alert on invalid sign-in', () => {
    const alertSpy = spyOn(window, 'alert');
    component.signinForm.patchValue({
      emailIdText: 'invalid@example.com',
      passwordText: 'InvalidPassword',
    });
    component.onSignIn();
    expect(alertSpy).toHaveBeenCalledWith('Invalid email or password. Please try again.');
  });
  
});
