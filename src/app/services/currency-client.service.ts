import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

  constructor(private httpCient: HttpClient) {

  }
  public getCurrency():Observable<RootObject>{
    return this.httpCient.get<RootObject>('https://api.ratesapi.io/api/latest')
  }
}
export interface Rates {
  GBP: number;
  HKD: number;
  IDR: number;
  ILS: number;
  DKK: number;
  INR: number;
  CHF: number;
  MXN: number;
  CZK: number;
  SGD: number;
  THB: number;
  HRK: number;
  MYR: number;
  NOK: number;
  CNY: number;
  BGN: number;
  PHP: number;
  SEK: number;
  PLN: number;
  ZAR: number;
  CAD: number;
  ISK: number;
  BRL: number;
  RON: number;
  NZD: number;
  TRY: number;
  JPY: number;
  RUB: number;
  KRW: number;
  USD: number;
  HUF: number;
  AUD: number;
}

export interface RootObject {
  base: string;
  rates: Rates;
  date: string;
}

