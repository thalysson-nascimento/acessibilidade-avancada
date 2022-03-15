import { ComponentRef } from '@angular/core';
import { ModalComponent } from '@components/modal/modal.component';

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  close(): void {
    this.componentRef.destroy();
    console.log('closed called');
  }
}
