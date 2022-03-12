import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from '@models/modal-ref';
import { ModalService } from '@services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'Formulário para registro de usuário',
    });
  }
}
