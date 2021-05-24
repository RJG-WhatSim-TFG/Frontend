import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WhatSim';
  isLogged = false;
  displayname: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLogged = !!this.tokenStorageService.getToken();

    if (this.isLogged) {
      const user = this.tokenStorageService.getUser();
      this.displayname = user.displayname;
    }
  
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
