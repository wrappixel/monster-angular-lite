import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal',
  templateUrl: './modal.component.html'
})
export class NgbdModalBasicComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}
  // This is for the first modal
  open1(content1) {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // This is for the Second modal
  open2(content2) {
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // This is for the Third varios modal options

  openBackDropCustomClass(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content3) {
    this.modalService.open(content3, { windowClass: 'dark-modal' });
  }

  openSm(content3) {
    this.modalService.open(content3, { size: 'sm' });
  }

  openLg(content3) {
    this.modalService.open(content3, { size: 'lg' });
  }

  openVerticallyCentered(content3) {
    this.modalService.open(content3, { centered: true });
  }

  


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

