import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-orgaos',
  templateUrl: './orgaos.component.html',
  styleUrls: ['./orgaos.component.scss']
})
export class OrgaosComponent implements OnInit {
  margin = false;
  modalRef: BsModalRef;
  constructor(private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    if(this.router.url == "/orgaos"){
      console.log(this.router.url);
      this.margin = true;
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    }
}
