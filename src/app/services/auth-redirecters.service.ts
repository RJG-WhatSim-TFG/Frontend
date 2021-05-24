import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import {TokenStorageService} from './token-storage.service'

@Injectable()
export class AuthRedirectersService implements CanActivate{

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (!this.tokenStorage.getToken()) {
        this.router.navigate(['/','signin']);
        return false;
    }

    return true;
}
}

