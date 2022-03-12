import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalComponent } from '@components/modal/modal.component';
import { ModalConfig } from '@interfaces/modal/modal-config.interface';
import { ModalRef } from '@models/modal-ref';
import { BodyInjectorModalService } from '@services/body-injector-modal/body-injector-modal';

@Injectable()
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private injector: Injector,
    private bodyInjectorModalService: BodyInjectorModalService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentFactory =
      componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }

  open(config: ModalConfig) {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log('open called');
    this.bodyInjectorModalService.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;

    return modalRef;
  }
}
