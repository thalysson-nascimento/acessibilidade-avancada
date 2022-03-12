import { ComponentRef } from '@angular/core';
import { ModalComponent } from '@components/modal/modal.component';

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  close(): void {
    console.log('closed called');
    this.componentRef.destroy();
  }
}
