import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoTab]',
})
export class AutoTabDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (input.maxLength === input.value.length && event.key !== 'Backspace') {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
}
