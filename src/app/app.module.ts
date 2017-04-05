import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { AlertComponent }  from './alert.component';
import { AnimalChooserComponent }  from './animal-chooser.component';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, AlertComponent, AnimalChooserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
