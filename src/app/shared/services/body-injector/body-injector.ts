import {
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BodyInjectorService {
  constructor(private applicarionRef: ApplicationRef) {}

  stackBeforeAppRoot(componentRef: ComponentRef<any>, hostView: string): void {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector(hostView);
    document.body.insertBefore(domElement, appRoot);
  }

  private createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    this.applicarionRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    return domElement;
  }
}
