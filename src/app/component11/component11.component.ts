import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-component11',
  imports: [ReactiveFormsModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.scss'
})
export class Component11Component {

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.min(0), Validators.max(99)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])

  })

}
