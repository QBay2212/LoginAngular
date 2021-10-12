import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()estado:EventEmitter<boolean>=new EventEmitter();

  Correo: string = "";
  Contrasena:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  entrar(e:boolean){
    if (this.Correo === "123456" && this.Contrasena === "123456"){} {
      this.estado.emit(e);
    }
  }

}


