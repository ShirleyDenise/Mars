import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { EncountersComponent } from './encounters/encounters.component';
import { ReportComponent } from './report/report.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'encounters', component: EncountersComponent},
  { path: 'report', component: ReportComponent},
  { path: '**', component: NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    EncountersComponent,
    ReportComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
