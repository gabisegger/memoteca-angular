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

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
