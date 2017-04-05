import { NgModule }      from '@angular/core';
import { NgbModule } 		 from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports:[ 
  	BrowserModule, 
  	NgbModule.forRoot() 
  ],
  declarations: [ 
  	AppComponent,
  	HeaderComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
