import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ngbd-buttons-radio',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class NgbdCarouselBasicComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
