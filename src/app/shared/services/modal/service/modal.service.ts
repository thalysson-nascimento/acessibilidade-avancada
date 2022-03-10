import { Injectable } from '@angular/core';
import { ModalConfig } from '@interfaces/modal/modal.interface';

@Injectable()
export class ModalService {
  open(config: ModalConfig) {
    console.log('open called');
    return new ModalRef();
  }
}

export class ModalRef {
  close(): void {
    console.log('closed called');
  }
}
