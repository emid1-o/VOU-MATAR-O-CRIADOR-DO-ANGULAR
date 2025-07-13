import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.scss'
})
export class Component03Component {

  imagem: string = "/assets/dia.jpg"
  

  mudarImagem(){
    if (this.imagem === "/assets/dia.jpg"){
      this.imagem = "/assets/noite.jpg";
    } else {
      this.imagem = "/assets/dia.jpg";
    }
  }

}
