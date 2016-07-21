import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]',
})
export class FocusDirective {
  @Input() focus: boolean = false;

  constructor(element: ElementRef): void {
    this.element = element;
  }

  ngOnChanges(): void {
    this.element.nativeElement.focus();
  }
}
