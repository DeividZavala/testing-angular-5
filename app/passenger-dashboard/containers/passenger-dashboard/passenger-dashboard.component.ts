import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";


@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `

		<div>
			<h1>Lista de pasajeros</h1>
			<ul>
				<li *ngFor="let passenger of passengers">
					<span class="status"
					[ngClass]="{
						'checked-in': passenger.checkedIn,
						'checked-out':!passenger.checkedIn
					}"></span>
					{{passenger.fullname}}
					<p>{{passenger | json}}</p>
					<div class="date">
						check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: "yMMMMd"):"No disponible" }}
					</div>
					<div>
						Children: {{passenger.children?.length || 0}}
					</div>

				</li>
			</ul>
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
