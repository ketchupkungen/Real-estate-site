import { NgModule }      from '@angular/core';
import { NgbModule } 		 from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { ObjectHeaderComponent } from './object-header.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectHeaderComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
