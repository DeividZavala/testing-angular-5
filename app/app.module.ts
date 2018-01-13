import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

//custom modules
import { PassengerModule } from "./passenger-dashboard/passenger-dashboard.module";

const routes: Routes = [{
	path: '',
	redirectTo: 'passengers',
	pathMatch: 'full'
},{
	path: '**',
	component: NotFoundComponent
}]


@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	NotFoundComponent
  ],
  imports: [
	//angular modules
    BrowserModule,
	CommonModule,
	FormsModule,
	RouterModule.forRoot(routes),

	//custom modules
	PassengerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
