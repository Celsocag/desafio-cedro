import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  perguntasUrl = 'http://tthiago.com/api/celso/';


  message = {
    pergunta1 : "",
    pergunta2 : "",
    pergunta3 : "",
    select1 : "",
    select2:  "",
    select3 : "",
    select4 : "",
  };

  perguntasList = {
    perguntasForm: [
      {
        key: "",
        pergunta: "",
        opcoes: []
      },
      {
        key: "",
        pergunta: "",
        opcoes: []
      },
      {
        key: "",
        pergunta: "",
        opcoes: []
      }
    ],
    perguntas4: [
      {
        key: "",
        pergunta: "",
        opcoes: []
      },
      {
        key: "",
        pergunta: "",
        opcoes: []
      },
      {
        key: "",
        pergunta: "",
        opcoes: []
      },
      {
        key: "",
        pergunta: "",
        opcoes: []
      }
    ]
  };


  private messageSource = new BehaviorSubject<any>("default message");

  currentMessage = this.messageSource.asObservable();


  constructor(private http : HttpClient) { }

  //Broadcast dos valores do formulario
  changeMessage(message : string){
    this.messageSource.next(message)
  }

  //chamada da API
  perguntasGet(){
    return this.http.get<any>(`${this.perguntasUrl}`)
    // return this.http.get<any[]>('');

  }



}
