import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  // TODO: Refactor a funcion generica de http request
  // private getHTTPResponse(url: string): Observable<Country[]> {
  //   return this.http.get<Country[]>(
  //     `${this.apiURL}/${url}`
  //   ).pipe(
  //     catchError(error => of([]))
  //   );
  // }

  searchCapital(searchTerm: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.apiURL}/capital/${searchTerm}`
    ).pipe(
      catchError(error => of([]))
    );
  }
  searchCountry(searchTerm: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.apiURL}/name/${searchTerm}`
    ).pipe(
      catchError(error => of([]))
    );
  }
  searchRegion(searchTerm: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.apiURL}/region/${searchTerm}`
    ).pipe(
      catchError(error => of([]))
    );
  }
  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(
      `${this.apiURL}/alpha/${code}`
    ).pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(error => of(null))
    );
  }
}
