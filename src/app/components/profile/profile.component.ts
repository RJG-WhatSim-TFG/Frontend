import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { DatePipe } from '@angular/common'
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  name: String;
  email: String;
  joindate: String;

  showDeleteConfirmation: Boolean = false;

  hasError: Boolean = false;
  errorShort: String;
  errorLong: String;
  loading: Boolean = false;

  constructor(private tokenStorage: TokenStorageService, private router: Router,private userService: UserService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      data => {
        this.name = data.user.displayname;
        this.email = data.user.email;
        var d = new Date(data.user.joindate);
        this.joindate = this.datepipe.transform(d, 'dd/MM/yyyy');
      },
      err => {
        console.log(err);
        this.hasError = true;
        this.errorShort = err.error.error;
        this.errorLong = err.error.message;
      }
    );
  }

  showConfirmation(){
    this.showDeleteConfirmation = true;
  }
  hideConfirmation(){
    this.showDeleteConfirmation = false;
  }

  deleteAccount(){
    this.userService.deleteAccount().subscribe({
      next: data => {
        //console.log("Ok");
        this.tokenStorage.signOut();
        this.loading = true;
        setTimeout(()=>{ 
          window.location.reload();
        }, 1000);
      },
      error: err => {
        console.log(err);
        this.hasError = true;
        this.errorShort = err.error.error;
        this.errorLong = err.error.message;
      }
    });
  }
}