import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
	selector: 'passenger-count',
	template:`

	<div>
		<h4>Pasajeros de la Aerolinea</h4>
		<p>Total de pasajeros registrados: {{ checkedInCount() }} / {{ items?.length }} </p>
	</div>

	`
})
export class PassengerCountComponent{

	@Input()
	items: Passenger[];
	checkedInCount(): number {
		if(!this.items) return;
		return this.items.filter(passenger => passenger.checkedIn).length;
	}

};
