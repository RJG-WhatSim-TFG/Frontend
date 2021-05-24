import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common'

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AuthRedirectersService} from './services/auth-redirecters.service'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {NgxMatDatetimePickerModule,NgxMatNativeDateModule,NgxMatTimepickerModule} from '@angular-material-components/datetime-picker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import { SignupComponent } from './components/signup/signup.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { ErrorpageComponent } from './components/error/errorpage.component';
import { ErrormodalComponent } from './components/error/errormodal.component';
import { ChatlistComponent } from './components/chat/chatlist/chatlist.component';
import { ConfirmationComponent } from './components/modals/confirmation/confirmation.component';
import { ChatmodalComponent } from './components/chat/chatmodal/chatmodal.component';
import { ChatdetailComponent } from './components/chat/chatdetail/chatdetail.component';
import { MessageComponent } from './components/chat/message/message.component';
import { MessagemodalComponent } from './components/chat/message/messagemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    ProfileComponent,
    ErrorComponent,
    ErrorpageComponent,
    ErrormodalComponent,
    ChatlistComponent,
    ConfirmationComponent,
    ChatmodalComponent,
    ChatdetailComponent,
    MessageComponent,
    MessagemodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTooltipModule,
    TextFieldModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [AuthInterceptor, DatePipe, AuthRedirectersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
