import { Component, OnInit } from '@angular/core';
import { Feeds,Feed } from './feeds-data';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {

  feeds:Feed[];

  constructor() {

    this.feeds = Feeds;
  }

  ngOnInit(): void {
  }

}
