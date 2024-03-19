import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss'
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
}
