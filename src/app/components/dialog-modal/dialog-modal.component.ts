import { Component, OnInit, TemplateRef } from '@angular/core';

// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {

  modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hiddeModal() {
    this.modalRef.hide();
  }

}
