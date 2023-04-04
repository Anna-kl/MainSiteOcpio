import {
  Component,
  ElementRef,
  forwardRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpService } from 'src/services/http/http.service';

export interface IData {
  code: string;
  countNumber: number;
  icon: string;
  id: number;
  mask: string;
  name: string;
}

@Component({
  selector: 'app-countryselect',
  templateUrl: './countryselect.component.html',
  styleUrls: ['./countryselect.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryselectComponent),
      multi: true,
    },
  ],
})
export class CountryselectComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  @ViewChild('selectedImg') selectedImg!: ElementRef;
  data$: BehaviorSubject<IData[]> = this.httpService.getItems$();
  value!: string;
  isOpen = false;
  subscriptions: Subscription[] = [];
  private onChange = (value: any) => {};
  private onTouched = () => {};
  set Value(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  constructor(private httpService: HttpService<IData>) {}
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    let subscription = this.httpService
      .getData('https://83.222.9.120/v1/api/Dictionaries/country')
      .subscribe();
    this.data$.subscribe((data) => {
      this.onChange(data[0]);
    });

    this.subscriptions.push(subscription);
  }

  onSelectItem(e: Event) {
    let el = e.currentTarget as HTMLLIElement;
    let item = this.data$.getValue().find((element) => {
      return element.id === el.value;
    });
    this.onChange(item);
    if (item) {
      this.selectedImg.nativeElement.src = item.icon;
      this.isOpen = !this.isOpen;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => {
      item.unsubscribe();
    });
  }
}
