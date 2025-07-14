import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  imports: [CommonModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.scss'
})
export class Component07Component {

  condicao:boolean = false;

  lista: string[] = ["Aprovado", "Aprovado", "Reprovado"];

  
}
