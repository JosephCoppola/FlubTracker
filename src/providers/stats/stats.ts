import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the StatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatsProvider {

  players: any;

  constructor(public http: HttpClient) {

  }
  
  updateStats() {
  
  }
  
  updatePlayers() {
    this.http.get("/getAllPlayers").subscribe(data => {
      this.players = data['players'];
      console.log(this.players);
    });  
  }
}
