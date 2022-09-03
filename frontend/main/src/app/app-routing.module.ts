import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BalanceComponent } from './balance/balance.component';
import { CarriersComponent } from './carriers/carriers.component';
import { CostComponent } from './cost/cost.component';
import { EditComponent } from './edit/edit.component';
import { FinanceComponent } from './finance/finance.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { InsightComponent } from './insight/insight.component';
import { LoginComponent } from './login/login.component';
import { LoginserviceService } from './loginservice.service';
import { PackregComponent } from './packreg/packreg.component';
import { PacktrackComponent } from './packtrack/packtrack.component';
import { RctQtComponent } from './rct-qt/rct-qt.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ShipQtComponent } from './ship-qt/ship-qt.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent, canActivate:[LoginserviceService]},
  { path: 'dashboard', component:InsightComponent, canActivate:[LoginserviceService]},
  { path: '', component:LoginComponent},
  { path: 'users', component:UsersComponent, canActivate:[LoginserviceService]},
  { path: 'carriers', component:CarriersComponent, canActivate:[LoginserviceService]},
  { path: 'pack-register', component:PackregComponent, canActivate:[LoginserviceService]},
  { path: 'pack-track', component:PacktrackComponent, canActivate:[LoginserviceService]},
  { path: 'finance', component:FinanceComponent, canActivate:[LoginserviceService]},
  { path: 'receipt', component:ReceiptComponent, canActivate:[LoginserviceService]},
  { path: 'cost', component:CostComponent, canActivate:[LoginserviceService]},
  { path: 'balance', component:BalanceComponent, canActivate:[LoginserviceService]},
  { path: 'ship-quote', component:ShipQtComponent, canActivate:[LoginserviceService]},
  { path: 'recent-quote', component:RctQtComponent, canActivate:[LoginserviceService]},
  { path: 'edit', component:EditComponent, canActivate:[LoginserviceService]},
  { path: 'about', component:AboutComponent, canActivate:[LoginserviceService]},
  { path: 'forgetPassword', component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
