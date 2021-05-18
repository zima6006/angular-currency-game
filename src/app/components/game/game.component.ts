import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Rates, RootObject} from "../../services/currency-client.service";
import {removeSummaryDuplicates} from "@angular/compiler";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  messageForUser: string;
  rootObject!: RootObject;
  result: string ='';
  liczba: number = 0;

  constructor(private  currencyClientService:CurrencyClientService) {
    this.messageForUser='';

  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject=value;
    });
  }

  sayHello(value: string) {
    this.messageForUser='hello '+value;
  }

  check(value: string) {

    this.liczba = parseFloat(value);

    if(this.liczba > this.rootObject.rates.PLN){
      this.result ="podałeś warość za dużą";
    }

    else if(this.liczba < this.rootObject.rates.PLN){
      this.result ="podałeś warość za małą";
    }
    else{
      this.result ="gratuluje wygrałeś";
    }

  }
}
