import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerData: any = {
    email: null,
    pass: null,
    displayname: null
  }

  isSuccessful = false;
  isFailed = false;

  constructor(private authService: AuthService, private router: Router) { }

  emailValidator = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(32)]);
  passwordValidator = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(22)]);
  displaynameValidator = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]);


  ngOnInit(): void {
    this.emailValidator.setErrors({alreadyExisting: false});
    this.displaynameValidator.setErrors({alreadyExisting: false});
  }

  signUp(): void {
    console.log(this.registerData);
    this.authService.register(this.registerData).subscribe(
      data => {
        this.isSuccessful = true;
        this.isFailed = false;
        this.router.navigate(['/signin']);
      },
      err => {
        this.isFailed = true;
        console.log(err);
        if(err.error.error=="account_already_exsists"){
          this.emailValidator.setErrors({alreadyExisting: true});
        }else if(err.error.error=="displayname_already_exsists"){
          this.displaynameValidator.setErrors({alreadyExisting: true});
        }
      }
    );
  }

}