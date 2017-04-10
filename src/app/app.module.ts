import { NgModule }      from '@angular/core';
import { NgbModule } 		 from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ContactFormContactViewComponent } from './contactform-contactview.component';
import { ObjectHeaderComponent } from './object-header.component';
import { SearchComponent } from './search.component';
import { SalesObjectSmallComponent } from './sales-object-small.component';
import { ReturnToTop } from './return-to-top';
import { LayoutComponent } from './layout.component';
import { SellWithUsComponent } from './sell-with-us.component';
import { SearchPageComponent} from './search-page.component';
import { ObjectDetailComponent } from './object-detail.component';
import { SalesObjectService } from './sales-object.service';
import { BrokersComponent } from './brokers.component';
import { SalesObjectSummaryComponent } from './sales-object-summary.component';


@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'search-page',
        pathMatch: 'full'
      },
      {  
        path:'sell-page',
        component: SellWithUsComponent  
      },
      {
        path:'search-page',
        component: SearchPageComponent
      },
      {
        path: 'detail/:id',
        component: ObjectDetailComponent
      }
    ]),
    HttpModule
  ],
  declarations: [
  	AppComponent,
  	HeaderComponent,
  	FooterComponent,
    ContactFormContactViewComponent,
    ObjectHeaderComponent,
    SearchComponent,
  	SalesObjectSmallComponent,
    ReturnToTop,
    LayoutComponent,
    SellWithUsComponent,
    SearchPageComponent,
    ObjectDetailComponent,
    BrokersComponent,
    SalesObjectSummaryComponent
  ],
  providers: [ SalesObjectService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
