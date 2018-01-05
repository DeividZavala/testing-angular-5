import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

//custom modules
import { PassengerModule } from "./passenger-dashboard/passenger-dashboard.module";


@NgModule({
  declarations: [
	AppComponent,
  ],
  imports: [
	//angular modules
    BrowserModule,
	CommonModule,
	FormsModule,

	//custom modules
	PassengerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
