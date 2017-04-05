import { Component } from '@angular/core';

@Component({
  selector: 'alerts',
  templateUrl: 'templates/alerts.html'
})
export class AlertComponent  { 
  showInfoAlert = true;
  closeInfoAlert(){
    this.showInfoAlert = false;
  }
  openInfoAlert(){
    this.showInfoAlert = true;
  }
}
