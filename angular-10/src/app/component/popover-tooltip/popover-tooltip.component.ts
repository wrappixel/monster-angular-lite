import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-ngbd-popover-tooltip',
	templateUrl: './popover-tooltip.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.card {
				overflow: hidden;
			}
			.my-custom-class {
				font-size: 125%;
			}
			.my-custom-class.tooltip > .tooltip-inner {
				background-color: darkgreen;
			}
			.my-custom-class.tooltip .arrow::before {
				border-top-color: darkgreen;
			}
		`
	]
})
export class NgbdPopTooltipComponent {
	greeting = {};

	name = 'World';
	lastShown: Date=new Date() ;
	lastHidden: Date=new Date();
	@ViewChild('p', { static: true }) public popover:any;

	public changeGreeting(greeting: NgbTooltip): void {
		const isOpen = this.popover.isOpen();
		this.popover.close();
		if (greeting !== this.greeting || !isOpen) {
			this.greeting = greeting;
			this.popover.open(greeting);
		}
	}

	toggleWithGreeting(tooltip:NgbTooltip, greeting: string) {
		if (tooltip.isOpen()) {
			tooltip.close();
		} else {
			tooltip.open({ greeting });
		}
	}

	recordShown() {
		this.lastShown = new Date();
	}

	recordHidden() {
		this.lastHidden = new Date();
	}
}
