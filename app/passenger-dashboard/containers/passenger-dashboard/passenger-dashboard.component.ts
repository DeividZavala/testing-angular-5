import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import { Object } from "core-js/library/web/timers";


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
				(remove)="handleRemove($event)">
			</passenger-detail>

		</div>

	`
})
export class PassengerDashboardComponent implements OnInit{

	passengers: Passenger[];

	constructor(){}

	ngOnInit(){
		this.passengers = [
			{
				id: 1,
				fullname: 'David Zavala',
				checkedIn: true,
				checkInDate: 1234567800000,
				children: [{name: "Casitas", age:15},{name:"Pollito", age:13}, {name:"Mario", age:34}]
			},
			{
				id:2,
				fullname: 'Casitas ENP',
				checkedIn: false,
				checkInDate: null,
				children: [{name: "Tacho", age:13}]
			},
			{
				id:3,
				fullname: 'Pollito Vazquez',
				checkedIn: true,
				checkInDate: 1235667800000,
				children: null

			}
		];
	}

	handleEdit(event: Passenger) {
		this.passengers = this.passengers.map((passenger: Passenger) => {
		  if (passenger.id === event.id) {
			passenger = Object.assign({}, passenger, event);
		  }
		  return passenger;
		});
	}

	handleRemove(event: Passenger) {
		this.passengers = this.passengers.filter((passenger: Passenger) => {
			return passenger.id !== event.id;
		});
	}


}
