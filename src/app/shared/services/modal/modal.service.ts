import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalConfig } from '@interfaces/modal/modal.interface';
import { ModalComponent } from '../../components/modal/modal.component';
import { BodyInjectorService } from './../body-injector/body-injector';

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
    this.bodyInjectorService.stackBeforeAppRoot(componentRef);
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
