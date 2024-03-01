import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss'
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Tdszgsergheste',
      autoria: 'Gabidgwsr',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Tdszgsergheste',
      autoria: 'Gabidgwsr',
      modelo: 'modelo3'
    }
  ];
}
