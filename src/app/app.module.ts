import { NgModule }      from '@angular/core';
import { NgbModule } 		 from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports:[ 
  	BrowserModule, 
  	NgbModule.forRoot() 
  ],
  declarations: [ 
  	AppComponent,
  	HeaderComponent,
  	FooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
