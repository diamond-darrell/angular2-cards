import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]',
})
export class FocusDirective {
  @Input() focus = false;

  static get parameters() {
    return [[ElementRef]];
  }

  constructor(element) {
    this.element = element;
  }

  ngOnChanges() {
    this.element.nativeElement.focus();
  }
}
