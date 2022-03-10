import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalService } from '@servises/modal/service/modal.service';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {}
