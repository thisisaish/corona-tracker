import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { WorldwideCasesComponent } from './dashboard/worldwide-cases/worldwide-cases.component';
import { NationwideCasesComponent } from './dashboard/nationwide-cases/nationwide-cases.component';
import { CountryWiseCasesComponent } from './dashboard/country-wise-cases/country-wise-cases.component';
import { GeochartComponent } from './dashboard/country-wise-cases/geochart/geochart.component';
import { ColumnchartComponent } from './dashboard/country-wise-cases/columnchart/columnchart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    WorldwideCasesComponent,
    NationwideCasesComponent,
    CountryWiseCasesComponent,
    GeochartComponent,
    ColumnchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
