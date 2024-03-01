import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.scss'
})
export class PensamentoComponent {

  @Input() pensamento = {
    conteudo: 'Teste',
    autoria: 'Gabi',
    modelo: 'modelo2'
  }

}
