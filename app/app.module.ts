import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassengersComponent } from "./passengers/passengers.component";


@NgModule({
  declarations: [
	AppComponent,
	PassengersComponent
  ],
  imports: [
    BrowserModule,
	CommonModule,
	FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
