import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appFocusTrap]',
})
export class FocusTrapDirective implements AfterViewInit {
  fisrtFocusAbleElement: HTMLElement = null;
  lastFocusAbleElement: HTMLElement = null;

  constructor(private elementRef: ElementRef<any>) {}

  ngAfterViewInit(): void {
    const focusAllEnableableElements = this.elementRef.nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`) as Array<HTMLLIElement>;

    this.fisrtFocusAbleElement = focusAllEnableableElements[0];

    this.lastFocusAbleElement =
      focusAllEnableableElements[focusAllEnableableElements.length - 1];

    this.fisrtFocusAbleElement.focus();
  }

  @HostListener('keydown', ['$event'])
  managerTab(event: KeyboardEvent): void {
    console.log(event);

    if (event.key !== 'Tab') {
      return;
    }

    if (
      event.shiftKey &&
      document.activeElement === this.fisrtFocusAbleElement
    ) {
      this.lastFocusAbleElement.focus();
      event.preventDefault();
    } else if (document.activeElement === this.lastFocusAbleElement) {
      this.fisrtFocusAbleElement.focus();
      event.preventDefault(); // impedi com que o focus do element continue
    }
  }
}
