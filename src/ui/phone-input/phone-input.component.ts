import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PhoneInputComponent,
    },
  ],
})
export class PhoneInputComponent
  implements AfterViewInit, OnDestroy, ControlValueAccessor
{
  @Input() mask!: string;
  value = '';
  onChange = (value: string) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  subscriptions$: Subscription[] = [];

  @ViewChild('input', { static: false }) input!: ElementRef;

  ngAfterViewInit(): void {
    let subsctiption = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          let inputValue = this.getInputNumbersValue(this.input.nativeElement);

          let formattedInputValue = '';

          if (!inputValue) {
            return (this.input.nativeElement.value = '');
          }

          if (['7', '8', '9'].indexOf(inputValue[0]) > -1) {
            if (inputValue[0] == '9') inputValue = '7' + inputValue;
            var firstSymbols = inputValue[0] == '8' ? '8' : '+7';
            formattedInputValue = this.input.nativeElement.value =
              firstSymbols + ' ';
            if (inputValue.length > 1) {
              formattedInputValue += '(' + inputValue.substring(1, 4);
            }
            if (inputValue.length >= 5) {
              formattedInputValue += ') ' + inputValue.substring(4, 7);
            }
            if (inputValue.length >= 8) {
              formattedInputValue += '-' + inputValue.substring(7, 9);
            }
            if (inputValue.length >= 10) {
              formattedInputValue += '-' + inputValue.substring(9, 11);
            }
          } else {
            formattedInputValue = '+' + inputValue.substring(0, 16);
          }
          this.input.nativeElement.value = formattedInputValue;
          this.onChange(formattedInputValue.replace(/\D/g, ''));
        })
      )
      .subscribe();

    this.subscriptions$.push(subsctiption);
  }

  getInputNumbersValue = function (input: HTMLInputElement) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  };

  ngOnDestroy(): void {
    this.subscriptions$.forEach((i) => {
      i.unsubscribe();
    });
  }
}
