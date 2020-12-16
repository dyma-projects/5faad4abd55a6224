import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string = "J'en peut plus, j'ai mis 2 jours pour trouver un simple event 'keyup'";
  @ViewChild('v') public el: ElementRef;



  constructor() {}

  ngOnInit() {}

  public add(){
    this.valeur = this.el.nativeElement.value;
  }

}
