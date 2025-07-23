import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component13',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component13.component.html',
  styleUrl: './component13.component.scss'
})
export class Component13Component {

  btnCadastrar:boolean = true;

  formulario = new FormGroup({

    id: new FormControl(''),
    nome: new FormControl(''),
    valor: new FormControl(null)
  })

  constructor(private servico: ProdutoService){}


  ngOnInit(){
    this.selecionar();
  }

  vetor: Produto[] = [];

  selecionar(){

    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  cadastrar(){

    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {

      this.vetor.push(retorno);

      this.formulario.reset();

    }) 
  }

  selecionarProduto(indice:number){

    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor

    })

    this.btnCadastrar = false;

  }

  alterar(){

    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      })

      this.vetor[indiceAlterado] = retorno;

      this.formulario.reset();

      this.btnCadastrar = true;
    })
  }

}
