import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
	selector: 'passenger-detail',
	styleUrls: ['passenger-detail.component.scss'],
	template: `

	<div>

		<span class="status"
		[ngClass]="{'checked-in': detail.checkedIn}"></span>
		{{detail.fullname}}
		<div class="date">
			check in date: {{ detail.checkInDate ? (detail.checkInDate | date: "yMMMMd"):"No disponible" }}
		</div>
		<div>
			Children: {{detail.children?.length || 0}}
		</div>

	</div>

	`
})
export class PassengerDetailComponent{

	@Input()
	detail: Passenger;

}
