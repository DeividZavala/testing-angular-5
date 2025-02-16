import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

import { PassegnerDashboardService } from "../../passenger-dashboard.service";

import { Router } from "@angular/router";


@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `

		<div>

			<passenger-count
				[items]="passengers">
			</passenger-count>
			<h1>Lista de pasajeros</h1>
			<div *ngFor="let passenger of passengers;">
				{{ passenger.fullname }}
			</div>
			<passenger-detail
				*ngFor="let passenger of passengers;"
				[detail]="passenger"
				(edit)="handleEdit($event)"
				(view)="handleView($event)"
				(remove)="handleRemove($event)">
			</passenger-detail>

		</div>

	`
})
export class PassengerDashboardComponent implements OnInit{

	passengers: Passenger[];

	constructor(
		private router: Router,
		private passengerService: PassegnerDashboardService
	){}

	ngOnInit(){
		this.passengerService.getPassengers().subscribe((data: Passenger[]) => this.passengers = data);
	}

	handleEdit(event: Passenger) {
		this.passengerService.updatePassengers(event).subscribe((data: Passenger) => {
			this.passengers = this.passengers.map((passenger: Passenger) => {
				if (passenger.id === event.id) {
				  passenger = Object.assign({}, passenger, event);
				}
				return passenger;
			  });
		});

	}

	handleRemove(event: Passenger) {
		this.passengerService.removePassengers(event).subscribe((data: Passenger)=>{
			this.passengers = this.passengers.filter((passenger: Passenger) => {
				return passenger.id !== event.id;
			});
		})
	}

	handleView(event: Passenger){
		this.router.navigate(['/passengers', event.id])
	}


}
