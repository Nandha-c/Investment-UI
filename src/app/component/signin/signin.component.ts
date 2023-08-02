import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { URLConstants, signinConstant } from 'src/app/app-constants';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm!: FormGroup;
  loginFailed: boolean = false;

  constructor(private router : Router, private formBuilder: FormBuilder , private auth:AuthService) {
    this.signinForm = this.formBuilder.group({
      emailIdText: ['', [Validators.required, Validators.email]],
      passwordText: ['', [Validators.required]]
    });
  }

  emailId: string ="";
  password: string ="";
  signinLabel: string ="";
  signinHeader: string ="";
  signIn: string ="";
  message: string ="";
  searchMessage: string ="";
  kaniniMessage: string ="";
  inputText: string = '';
  maskedPassword: string = '';


  ngOnInit(): void {
    this.emailId = signinConstant.emailId;
    this.password = signinConstant.password;
    this.signinLabel = signinConstant.signinLabel;
    this.signinHeader = signinConstant.signinHeader;
    this.signIn = signinConstant.signIn;
    this.message = signinConstant.message;
    this.searchMessage = signinConstant.searchMessage;
    this.kaniniMessage = signinConstant.kaniniMessage;

    const token = this.auth.getJwtToken();

    if (token !== null) {
      if (token == "" || token == undefined || token == null) {
        localStorage.removeItem('token');
      }
      else {
        this.router.navigate([URLConstants.searchEngineUrl]);
      }
    }
  }
  maskPassword() {
    this.maskedPassword = this.inputText.replace(/./g, '*');
  }

  onSignIn(): void {

    const email= this.signinForm.value.emailIdText;
    const password= this.signinForm.value.passwordText;

    if(email && password)
    {
      this.auth.signin({mailId: email , Password: password}).subscribe(success =>{
        if(success)
        {
          this.router.navigate([URLConstants.searchEngineUrl]);
        }
        else{
          this.loginFailed =  true;
        }
      },error => {
        this.loginFailed = true;
      }
      );
    }
  }
}
