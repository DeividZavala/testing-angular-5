import { Component } from "@angular/core";

interface Passenger{
	id: number,
	fullname: string,
	checkedIn: boolean
}

@Component({
	selector: 'passengers-component',
	styleUrls: ['./passengers.component.scss'],
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
				</li>
			</ul>
		</div>

	`
})
export class PassengersComponent{
	passengers: Passenger[] = [
		{
			id: 1,
			fullname: 'David Zavala',
			checkedIn: true
		},
		{
			id:2,
			fullname: 'Casitas ENP',
			checkedIn: false
		},
		{
			id:3,
			fullname: 'Pollito Vazquez',
			checkedIn: true
		}
	]
}
