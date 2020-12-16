import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() public update: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public plusUn(){
    this.compteur++;
    this.update.emit(this.compteur);
    //console.log(this.compteur);
  }

  public moinsUn(){
    this.compteur--;
    this.update.emit(this.compteur);
    //console.log(this.compteur);
  }


  ngOnInit() {
  }

}
