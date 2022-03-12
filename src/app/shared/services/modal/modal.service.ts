import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalComponent } from '@components/modal/modal.component';
import { ModalConfig } from '@interfaces/modal/modal-config.interface';
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
    return new ModalRef(componentRef);
  }
}

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  close(): void {
    console.log('closed called');
    this.componentRef.destroy();
  }
}
