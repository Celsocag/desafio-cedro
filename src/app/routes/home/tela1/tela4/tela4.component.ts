import { Component, OnInit } from '@angular/core';
import { PerguntasService } from 'src/app/perguntas.service';

@Component({
  selector: 'app-tela4',
  templateUrl: './tela4.component.html',
  styleUrls: ['./tela4.component.scss']
})
export class Tela4Component implements OnInit {

  message = {
    pergunta1 : "",
    pergunta2 : "",
    pergunta3 : "",
    select1 : "",
    select2:  "",
    select3 : "",
    select4 : "",
  };


  constructor(
    private  data: PerguntasService

  ) { }

  ngOnInit(): void {
    //atualização dos valores do formulario
    this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message);
  }

}
