import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  item$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  updateItems(data: boolean): void {
    this.item$.next(data);
  }
  getItems(): boolean {
    let data = this.item$.getValue();
    return data;
  }
  getItems$(): BehaviorSubject<boolean> {
    return this.item$;
  }
}
