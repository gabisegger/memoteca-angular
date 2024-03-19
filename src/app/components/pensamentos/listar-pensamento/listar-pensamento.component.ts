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
    },
    {
      conteudo: 'Muitas ferramentas de software fazer textos aleatórios disponíveis preenchimento para criar conteúdo falso diretamente em seu ambiente. Isso pode ser na forma de software para instalar no seu PC ou Mac, ou como extensões / plugins instalar em seu software existente (processamento de texto / navegador / web site criação / design ...). Você pode encontrar as funções ou instalar plugins para gerar texto Lorem Ipsum em seu software de edição de texto, como o Microsoft Word, OpenOffice, Notepad ++ ou Lotus Notes; seu software de apresentação como Keynote ou Pages; seus CMS como Joomla, Drupa, Mambo, PH-Nuke, WordPress ou Movable Type; seus navegadores como Chrome; seu software desgin como Photoshop.O texto falso também não dá uma visão realista de tons de cinza tipográfico, especialmente no caso de texto justificado. O espaçamento do texto falsa ainda é um pouco maior do que com um texto real, que vai apresentar mais escura olhar e menos legível do que o texto falso com que o designer fez seus ensaios. Isso pode distorcer a apresentação final da impressão.',
      autoria: '',
      modelo: 'modelo2'
    }
  ];
}
