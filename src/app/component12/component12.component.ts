import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-component12',
  imports: [CommonModule, MediaPipe],
  templateUrl: './component12.component.html',
  styleUrl: './component12.component.scss'
})
export class Component12Component {

  nome: string = "emidio";

  obj: any = { 'nome': 'emidio', 'idade': 34 };

  // Vetor de objetos
  alunos: any = [
    { 'nome': 'Ana', 'nota1': 8, 'nota2': 9 },
    { 'nome': 'Julio', 'nota1': 7, 'nota2': 8 },
    { 'nome': 'Letícia', 'nota1': 3, 'nota2': 2 },
    { 'nome': 'Ricardo', 'nota1': 7, 'nota2': 7 }
  ];

}
