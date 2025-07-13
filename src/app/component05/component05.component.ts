import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component05',
  imports: [CommonModule],
  templateUrl: './component05.component.html',
  styleUrl: './component05.component.scss'
})
export class Component05Component {

  nomes:string [] = ["emidio", "jose", "sousa", "neto"];
}
