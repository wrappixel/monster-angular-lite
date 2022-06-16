import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards:topcard[];

  constructor() { 

    this.topcards=topcards;
  }

  ngOnInit(): void {
  }

}
