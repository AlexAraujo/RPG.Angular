import { CadastrosService } from './../service/cadastros.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cadastros } from '../models/Cadastros';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ViewPersonagens',
  templateUrl: './ViewPersonagens.component.html',
  styleUrls: ['./ViewPersonagens.component.scss']
})
export class ViewPersonagensComponent implements OnInit {
  ngOnInit() {}

  @Output() aoCadastrar = new EventEmitter<any>();

  nome?: string;
  apelido?: string;
  idade?: number;
  classe?: string;
  raca?: string;

  constructor(private service: CadastrosService) {

  }

  cadastrar() {
    console.log('cadastrado com sucesso');
    const personagemCadastrar: Cadastros = {
      nome: this.nome,
      apelido: this.apelido,
      idade: this.idade,
      classe: this.classe,
      raca: this.raca}
    this.service.adcionar(personagemCadastrar).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    (error) => console.error(error)
    );
  }

  limparCampos() {
    this.nome = '';
    this.apelido = '';
    this.idade = 0;
    this.classe = '';
    this.raca = '';
  }

}

