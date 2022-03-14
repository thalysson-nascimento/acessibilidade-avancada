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
import { BodyInjectorService } from '@services/body-injector/body-injector';

@Injectable()
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private injector: Injector,
    private bodyInjectorService: BodyInjectorService,
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
    this.bodyInjectorService.stackBeforeAppRoot(componentRef, 'app-root');
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;

    return modalRef;
  }
}
