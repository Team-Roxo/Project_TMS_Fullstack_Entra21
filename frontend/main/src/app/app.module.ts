import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsightComponent } from './insight/insight.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { CarriersComponent } from './carriers/carriers.component';
import { PackregComponent } from './packreg/packreg.component';
import { PacktrackComponent } from './packtrack/packtrack.component';
import { FinanceComponent } from './finance/finance.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CostComponent } from './cost/cost.component';
import { BalanceComponent } from './balance/balance.component';
import { ShipQtComponent } from './ship-qt/ship-qt.component';
import { RctQtComponent } from './rct-qt/rct-qt.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';

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
    PackregComponent,
    PacktrackComponent,
    FinanceComponent,
    ReceiptComponent,
    CostComponent,
    BalanceComponent,
    ShipQtComponent,
    RctQtComponent,
    EditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
