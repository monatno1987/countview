import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
import { Words } from './words';
import Any = jasmine.Any;

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://10.176.1.218:8000/countwords';
@Injectable({
    providedIn:'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    contwords(words): Observable<Any> {
        return this.http.post<Any>(apiUrl, words, httpOptions).pipe(
            tap((words: Any) => console.log(`added product w/ id=${words.id}`)),
            catchError(this.handleError<Any>('addProduct'))
        );
    }
}
