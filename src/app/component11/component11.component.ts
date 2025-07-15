import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component11',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.scss'
})
export class Component11Component {

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required,Validators.min(0), Validators.max(99)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])

  })

  btnCadastrar: boolean = true;

  vetor: Pessoa [] = [];

  indice: number = -1;

  cadastrar(){

    //cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa)

    this.formulario.reset();

    console.table(this.vetor);
  }

  selecionar(indice: number){

    this.indice = indice;

    this.formulario.setValue({

      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade,
    })

    this.btnCadastrar = false;
  }

  alterar(){

    this.vetor[this.indice] = this.formulario.value as Pessoa;

    this.formulario.reset();

    this.btnCadastrar = true;
  }

  remover(){

    this.vetor.splice(this.indice);

    this.formulario.reset();

    this.btnCadastrar=true;
  }

  cancelar(){

    this.formulario.reset();

    this.btnCadastrar = true;
  }

}
