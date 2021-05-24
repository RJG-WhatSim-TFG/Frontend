import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrormodalComponent } from './errormodal.component';

enum Error {
  unknown_error,
  account_not_found,
  account_wrong_credentials,
  invalid_web_token,
  account_already_exsists,
  displayname_already_exsists,
  chat_not_found
}

@Component({
  selector: 'whatsim-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() error: String;
  @Input() type: String;
  @Input() description: String;

  errorType: Error
  message: String

  useDialog: Boolean = false;
  needSignout: Boolean = false;
  compVisible: Boolean = true;

  constructor(private tokenStorage: TokenStorageService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    try {
      var err:Error = (<any>Error)[this.error.toString()];
      this.errorType = err;
      switch (this.errorType) {
        case Error.unknown_error:
          this.message = "Ha ocurrido un error desconocido";
          break;
        case Error.account_not_found:
          this.message = "No se ha podido encontrar la cuenta";
          break;
        case Error.account_wrong_credentials:
          this.message = "Los credenciales son incorrectos";
          break;
        case Error.invalid_web_token:
          this.message = "El token de sesión es invalido";
          this.description = this.description==null? "Prueba cerrando sesión e iniciando de nuevo. Se cerrará sesión automáticamente al cerrar este dialogo":null;
          this.needSignout = true;
          break;
        case Error.account_already_exsists:
          this.message = "La cuenta ya está registrada";
          break;
        case Error.displayname_already_exsists:
          this.message = "El nombre de usuario ya se ha utilizado";
          break;
        case Error.chat_not_found:
            this.message = "El chat no existe o no es posible acceder a el";
            break;
        default:
          this.message = "Ha ocurrido un error desconocido";
          break;
      }
      if(this.type=="dialog"){
        this.useDialog = true;
        if(this.needSignout){
          this.openDialogAndSignout();
        }else this.openDialog();
      }
    } catch (error) {
      console.log("No se encontro error: "+error);
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ErrormodalComponent, {
      data: { errorTitle: this.message, errorDescription: this.description }
    });
  }

  openDialogAndSignout(): void {
    const dialogRef = this.dialog.open(ErrormodalComponent, {
      data: { errorTitle: this.message, errorDescription: this.description }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.tokenStorage.signOut();
      //window.location.reload()
      this.router.navigate(['/signin']);
    });
  }

  close(){
    this.compVisible = false;
  }

}
