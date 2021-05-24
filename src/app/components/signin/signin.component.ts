import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginData: any = {
    email: null,
    pass: null
  };
  isLogged = false;
  isFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  emailValidator = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(32)]);
  passwordValidator = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(22)]);

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLogged = true;
      this.router.navigate(['/home']);
    }
    this.emailValidator.setErrors({notFound: false});
    this.emailValidator.setErrors({wrongCredentials: false});
    this.passwordValidator.setErrors({wrongCredentials: false});
  }

  signIn(): void {
    //const { email, pass } = this.loginForm;

    this.authService.login(this.loginData).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isFailed = false;
        this.isLogged = true;
        this.router.navigate(['/home']);
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
        console.log(err);
        if(err.error.error=="account_not_found"){
          this.emailValidator.setErrors({notFound: true});
        }else if(err.error.error=="account_wrong_credentials"){
          this.emailValidator.setErrors({wrongCredentials: true});
          this.passwordValidator.setErrors({wrongCredentials: true});
        }
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
