import { EventEmitter, OnInit, Output } from "@angular/core";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.component.html',
  styleUrls: ['./tela2.component.scss']
})
export class Tela2Component implements OnInit {

  urlBtn : string;
  hideClass: string;


  constructor(
    private fb: FormBuilder,

  ) { }

  @Output() newItemEvent = new EventEmitter<boolean>();

  termoForm = new FormGroup({

    checkBox: new FormControl('', [
      Validators.required,]),

  });


  ngOnInit(): void {
  }


validadteForm(){
  this.termoForm.valid ?
  this.urlBtn = "" : this.urlBtn = "/tela3" ;
}

FunctionHideModal(){
  this.newItemEvent.emit(false);
}

}
