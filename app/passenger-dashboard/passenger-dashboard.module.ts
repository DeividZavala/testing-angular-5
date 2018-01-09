import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-details/passenger-detail.component";

//services
import { PassegnerDashboardService } from "./passenger-dashboard.service";


@NgModule({
	declarations:[
		PassengerDashboardComponent,
		PassengerCountComponent,
		PassengerDetailComponent
	],
	imports:[
		CommonModule
	],
	exports: [
		PassengerDashboardComponent
	],
	providers: [
		PassegnerDashboardService
	]
})

export class PassengerModule{}
