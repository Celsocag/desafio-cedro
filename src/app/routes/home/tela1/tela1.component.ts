import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.component.html',
  styleUrls: ['./tela1.component.scss']
})
export class Tela1Component implements OnInit {

  constructor() {}
  items: string;
  modalShowHide = false;


  outputListener(newItem) {
    this.modalShowHide = newItem;
  }

  functionShowModal(){
    this.modalShowHide = true;
  }
  ngOnInit(): void {

  }

}
