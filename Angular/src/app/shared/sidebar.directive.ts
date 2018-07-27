import { Directive, HostListener } from '@angular/core';

/**
* Allows the sidebar to be toggled via click.
*/
/*@Directive({
  selector: '.sidebartoggler',
})
export class SidebarToggleDirective {
  constructor() { }

@HostListener('click', ['$event'])
  	toggleOpen($event:any) {
	    $event.preventDefault();
	    if(document.querySelector('body').classList.contains('mini-sidebar')) {
		    document.querySelector('body').classList.remove('mini-sidebar');
  		} else {
  			document.querySelector('body').classList.add('mini-sidebar');
  		}
  	}
}*/

@Directive({
  selector: '.nav-toggler',
})
export class MobileSidebarToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event:any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('show-sidebar');
    document.querySelector('.nav-toggler i').classList.toggle('ti-menu');
    document.querySelector('.nav-toggler i').classList.add('ti-close');
  }
}

@Directive({
  selector: '.right-side-toggle',
})
export class RightSidebarToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event:any) {
    $event.preventDefault();
    document.querySelector('.right-sidebar').classList.toggle('shw-rside');
   }
}

export const SIDEBAR_TOGGLE_DIRECTIVES = [MobileSidebarToggleDirective,RightSidebarToggleDirective];
