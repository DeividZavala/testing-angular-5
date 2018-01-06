import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";


@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `

		<div>
			<passenger-count
				[items]="passengers"
			>
			</passenger-count>
			<h1>Lista de pasajeros</h1>
			<passenger-detail
				*ngFor="let passenger of passengers;"
				[detail]="passenger"
			>
			</passenger-detail>

		</div>

	`
})
export class PassengerDashboardComponent implements OnInit{

	passengers: Passenger[];

	constructor(){}

	ngOnInit(){
		console.log("ngOnInit");
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

}
