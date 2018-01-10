import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-details/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

//services
import { PassegnerDashboardService } from "./passenger-dashboard.service";


@NgModule({
	declarations:[
		PassengerDashboardComponent,
		PassengerViewerComponent,
		PassengerCountComponent,
		PassengerDetailComponent,
		PassengerFormComponent
	],
	imports:[
		CommonModule,
		HttpModule,
		FormsModule
	],
	exports: [
		PassengerDashboardComponent,
		PassengerViewerComponent
	],
	providers: [
		PassegnerDashboardService
	]
})

export class PassengerModule{}
