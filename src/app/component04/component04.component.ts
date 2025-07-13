import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.scss'
})
export class Component04Component {

  exibir:boolean = true;

  mostrarQuadrado(){

    if (this.exibir === false){
      this.exibir = true;
    } else {
      this.exibir = false;
    }
  }

}
