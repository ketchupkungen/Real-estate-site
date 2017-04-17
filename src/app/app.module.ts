import { NgModule }      from '@angular/core';
import { NgbModule } 		 from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { SalesObjectService } from './sales-object.service';

import { OrderByPipe } from './order-by.pipe';

import { AppComponent }                    from './app.component';
import { HeaderComponent }                 from './header.component';
import { FooterComponent }                 from './footer.component';
import { ContactFormContactViewComponent } from './contactform-contactview.component';
// Menu for a specific salesObject
import { SalesObjectHeaderComponent }      from './sales-object-header.component';
// Images for a specific salesObject
import { SalesObjectImagesComponent }      from './sales-object-images.component';
import { SearchComponent }                 from './search.component';
import { SalesObjectSmallComponent }       from './sales-object-small.component';
import { ReturnToTop }                     from './return-to-top';
import { LayoutComponent }                 from './layout.component';
import { SellWithUsComponent }             from './sell-with-us.component';
import { SearchPageComponent}              from './search-page.component';
import { ContactPageComponent}             from './contact-page.component';
import { ObjectDetailComponent }           from './object-detail.component';
import { SalesObjectRecommendedComponent } from './sales-object-recommended.component';

import { BrokersComponent }                from './brokers.component';
import { CompanyCardComponent }            from './contact-company.component';
import { SalesObjectSummaryComponent }     from './sales-object-summary.component';

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
        path: 'sell-page',
        component: SellWithUsComponent
      },
      {
        path: 'search-page',
        component: SearchPageComponent
      },
      {
        path: 'contact-page',
        component: ContactPageComponent
      },
      {
        path: 'detail/:id',
        component: ObjectDetailComponent
      }
    ]),
    HttpModule
  ],
  declarations: [
    OrderByPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactFormContactViewComponent,
    SalesObjectHeaderComponent,
    SalesObjectImagesComponent,
    SearchComponent,
    SalesObjectSmallComponent,
    ReturnToTop,
    LayoutComponent,
    SellWithUsComponent,
    BrokersComponent,
    CompanyCardComponent,
    SearchPageComponent,
    ContactPageComponent,
    ObjectDetailComponent,
    BrokersComponent,
    SalesObjectSummaryComponent,
    SalesObjectRecommendedComponent
  ],
  providers: [ SalesObjectService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
