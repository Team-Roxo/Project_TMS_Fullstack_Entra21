import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsightComponent } from './insight/insight.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { CarriersComponent } from './carriers/carriers.component';
import { PacktrackComponent } from './packtrack/packtrack.component';
import { FinanceComponent } from './finance/finance.component';
import { ShipQtComponent } from './ship-qt/ship-qt.component';
import { RctQtComponent } from './rct-qt/rct-qt.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from "@angular/common/http";
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserClientComponent } from './user-client/user-client.component';
import { VisitsComponent } from './visits/visits.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    InsightComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    UsersComponent,
    CarriersComponent,
    PacktrackComponent,
    FinanceComponent,
    ShipQtComponent,
    RctQtComponent,
    EditComponent,
    AboutComponent,
    ForgetPasswordComponent,
    UserClientComponent,
    VisitsComponent,
    

  ],

  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

