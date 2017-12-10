import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RateAdminComponent } from './rate-admin/rate-admin.component';
import { Routes, RouterModule } from "@angular/router";
import { StarRatingModule } from 'angular-star-rating';
export const appRoutes: Routes = [
  { path: 'home', pathMatch: 'full', component: RateAdminComponent }]
  // { path: 'home', pathMatch: 'full', component: RatingComponent }]
@NgModule({
  declarations: [
    AppComponent,
    RateAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StarRatingModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
