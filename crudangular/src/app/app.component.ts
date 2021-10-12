import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estado: boolean = true;

  validar(e:boolean){
    this.estado=e;
  }
}
