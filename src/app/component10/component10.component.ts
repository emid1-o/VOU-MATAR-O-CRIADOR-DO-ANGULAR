import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component10',
  imports: [ReactiveFormsModule],
  templateUrl: './component10.component.html',
  styleUrl: './component10.component.scss'
})
export class Component10Component {

  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  })

}
