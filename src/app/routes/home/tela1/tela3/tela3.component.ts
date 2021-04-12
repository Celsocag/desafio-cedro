
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PerguntasService } from "src/app/perguntas.service";

@Component({
  selector: 'app-tela3',
  templateUrl: './tela3.component.html',
  styleUrls: ['./tela3.component.scss']
})
export class Tela3Component implements OnInit {

  message: any;

  perguntasList:  {
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

  constructor(
    private data: PerguntasService

  ) { }


  perguntasForm = [
    {
      "key": "pergunta1",
      "pergunta": "Qual o seu comportamento em relação aos seus investimentos ?",
      "opcoes": [
        "Preservar meu dinheiro sem correr riscos",
        "Ganhar mais dinheiro assumindo riscos moderados",
        "Ganhar mais dinheiro assumindo riscos agressivos"
      ]
    },
    {
      "key": "pergunta2",
      "pergunta": "Por quanto tempo você deseja manter o s seus investimentos ?",
      "opcoes": [
        "Até um ano",
        "De 1 a 3 anos",
        "De 1 a 5 anos"
      ]
    },
    {
      "key": "pergunta3",
      "pergunta": "Quantos % desses investimentos você pode precisar em um ano ?",
      "opcoes": [
        "Acima de 25%", "Até 25%", "De 25% a 25%"
      ]
    }
  ]
  pergunta4 = [
    {
      "key": "select1",
      "pergunta": "Titulos de renda fixa ou tesouro direto ",
      "opcoes": [
        "Nunca operei",
        "Opero pouco e não tenho familiaridade",
        "Opero eventualmente e conheço os riscos associados",
        "Opero frequentemente e conheço os riscos associados"
      ]
    },
    {
      "key": "select2",
      "pergunta": "fundos de investimento",
      "opcoes": [
        "Nunca operei",
        "Opero pouco e não tenho familiaridade",
        "Opero eventualmente e conheço os riscos associados",
        "Opero frequentemente e conheço os riscos associados"
      ]
    },
    {
      "key": "select3",
      "pergunta": "ações a vista",
      "opcoes": [
        "Nunca operei",
        "Opero pouco e não tenho familiaridade",
        "Opero eventualmente e conheço os riscos associados",
        "Opero frequentemente e conheço os riscos associados"
      ]
    },
    {
      "key": "select4",
      "pergunta": "aluguel de ações, termos, opções e futuros",
      "opcoes": [
        "Nunca operei",
        "Opero pouco e não tenho familiaridade",
        "Opero eventualmente e conheço os riscos associados",
        "Opero frequentemente e conheço os riscos associados"
      ]
    }
  ]


  //chamada api form


  // perguntas4 : any;
  // teste : any;


  perfilForm = new FormGroup({

    pergunta1: new FormControl('', [
      Validators.required,
      Validators.minLength(1)]),
    pergunta2: new FormControl('', [
      Validators.required,
      Validators.minLength(1)]),
    pergunta3: new FormControl('', [
      Validators.required,
      Validators.minLength(1)]),
    select1: new FormControl('', [
      Validators.required,
      Validators.minLength(1)]),
    select2: new FormControl('', [
      Validators.required,
      Validators.minLength(1)]),
    select3: new FormControl('', [
      Validators.required,
      Validators.minLength(1)]),
    select4: new FormControl('', [
      Validators.required,
      Validators.minLength(1)])

  });

  ngOnInit(): void {
    // this.perguntasGet();
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  perguntasGet() {

    // chamada da api
    this.data.perguntasGet().subscribe(dados => this.perguntasList = dados);
    console.log(this.perguntasList)

  }

  onSubmit() {
    console.log(this.perfilForm.value);

    this.newmessage();
  }

  newmessage() {
    //atualização dos valores do formulario
    this.data.changeMessage(this.perfilForm.value)
  }

}
