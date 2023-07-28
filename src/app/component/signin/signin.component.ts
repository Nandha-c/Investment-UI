import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signinConstant } from 'src/app/app-constants';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm!: FormGroup;
  constructor(private router : Router, private formBuilder: FormBuilder) {
    this.signinForm = this.formBuilder.group({
      emailIdText: ['', [Validators.required, Validators.email]],
      passwordText: ['', [Validators.required]]
    });
  }

  /* variables declaration */
  emailId: string ="";
  password: string ="";
  signinLabel: string ="";
  signinHeader: string ="";
  signIn: string ="";
  message: string ="";
  searchMessage: string ="";
  kaniniMessage: string ="";
  inputText: string = '';


  ngOnInit(): void {
    this.emailId = signinConstant.emailId;
    this.password = signinConstant.password;
    this.signinLabel = signinConstant.signinLabel;
    this.signinHeader = signinConstant.signinHeader;
    this.signIn = signinConstant.signIn;
    this.message = signinConstant.message;
    this.searchMessage = signinConstant.searchMessage;
    this.kaniniMessage = signinConstant.kaniniMessage;
    
  }

  onSignIn(): void {
    if (this.signinForm.valid) {
      const email = this.signinForm.get('emailIdText')?.value;
      const password = this.signinForm.get('passwordText')?.value;


      const validEmail = 'example@kanini.com';
      const validPassword = 'Password@123';

      if (email === validEmail && password === validPassword) {
        this.router.navigate(['/searchEngine']);
      } else {
        alert('Invalid email or password. Please try again.');
      }
    }
  }
}
