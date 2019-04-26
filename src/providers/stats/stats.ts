import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the StatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatsProvider {

  players: any;

  constructor(public http: HttpClient, public toastController: ToastController) {

  }
  
  updateStats(newPlayerObj, callback) {
    let headers = {headers: {
      'Content-Type': 'application/json'
    }};
    
    this.http.post("/updateStats", newPlayerObj, headers).subscribe(data => {
      if(data['error'] == "Success") {
        callback();
      }
      else{
        callback(data['error']);
      }
    });
  }
  
  updatePlayers() {
    this.http.get("/getAllPlayers").subscribe(data => {
      this.players = data['players'];
    });  
  }
  
  createNewPlayer(playerName : string) {
    let headers = {headers: {
      'Content-Type': 'application/json'
    }};
    
    let postData = {
      "name": playerName
    };
    
    this.http.post("/createPlayer", postData, headers).subscribe(data => {
      console.log(data);
      if(data['error'] == "Success") {
        const toast = this.toastController.create({
          message: playerName + ' has been successfully created!',
          position: 'top',
          cssClass: 'addPlayerSuccess',
          duration: 3000
        });
        toast.present();
      }
      else {
        
      }
    }, error => {
      console.log(error);
    });
  }
  
  getSocketPort(callback) {
    this.http.get("/socketPort").subscribe(data => {
      callback(data['port']);
    });
  }
}
