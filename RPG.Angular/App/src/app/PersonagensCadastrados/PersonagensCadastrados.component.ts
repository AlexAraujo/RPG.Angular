import { Cadastros } from './../models/Cadastros';
import { CadastrosService } from './../service/cadastros.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PersonagensCadastrados',
  templateUrl: './PersonagensCadastrados.component.html',
  styleUrls: ['./PersonagensCadastrados.component.scss']
})
export class PersonagensCadastradosComponent implements OnInit {
  cadastrados: any[] = [];

  constructor(private service: CadastrosService) { }

  ngOnInit() {
    this.service.todos().subscribe((cadastrados: Cadastros[]) => {
      console.table(cadastrados);
      this.cadastrados = cadastrados;
    })
  }
}
