import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createFormBuilder();
  }

  createFormBuilder() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'Formulário para registro de usuário',
    });
  }

  close() {
    console.log('fechar modal');
    return this.modalRef.close();
  }

  submit() {
    if (this.form.invalid) {
      console.log('formulário invalido');
      return;
    }

    this.modalRef.close();
    console.log('formulario subimetido com sucesso');
    console.log(this.form.value);
  }
}
