import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> {
  items$: BehaviorSubject<T> = new BehaviorSubject<T>({} as T);

  constructor(private http: HttpClient) {}
  getData(api: string): Observable<T> {
    const data = this.http.get<T>(api).pipe(
      map((response) => {
        return response;
      }),
      catchError(this.handleError<any>('GetData'))
    );
    return data;
  }

  updateItems(data: T): void {
    this.items$.next(data);
  }

  getItems$(): BehaviorSubject<T> {
    return this.items$;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
