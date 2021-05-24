import { Component } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogged = false;
  displayname: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(): void {
      this.isLogged = !!this.tokenStorageService.getToken();
  
      if (this.isLogged) {
        const user = this.tokenStorageService.getUser();
        this.displayname = user.displayname;
      }
    }

  constructor(private breakpointObserver: BreakpointObserver, private tokenStorageService: TokenStorageService) {}

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  

}
