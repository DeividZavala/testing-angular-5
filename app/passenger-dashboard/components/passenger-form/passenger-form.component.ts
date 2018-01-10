import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
	selector: 'passenger-form',
	styleUrls: ['passenger-form.component.scss'],
	template: `

	<form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
		{{detail | json}}

		<div>
			Nombre del pasajero:
			<input
				type="text"
				name="fullname"
				required
				#fullname="ngModel"
				[ngModel]="detail?.fullname">
				{{fullname.errors | json}}
				<!--
					De igual forma se puede usar
					fullname.touched para cuando le
					pique y salga el usr
				-->
				<div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
					El nombre completo del pasajero es requerido
				</div>
		</div>

		<div>
			ID del pasajero:
			<input
				type="number"
				name="id"
				required
				#id="ngModel"
				[ngModel]="detail?.id">
				<div *ngIf="id.errors?.required && id.dirty" class="error">
					El id del pasajero es requerido
				</div>
		</div>

		<div>
			Confirmado:
			<!-- Con Radio buttons
			<label>
				<input
				type="radio"
				[value]="true"
				name="checkedIn"
				[ngModel]="detail?.checkedIn"
				(ngModelChange)="toggleCheckedIn($event)">
				Si
			</label>

			<label>
				<input
				type="radio"
				[value]="false"
				name="checkedIn"
				[ngModel]="detail?.checkedIn"
				(ngModelChange)="toggleCheckedIn($event)">
				No
			</label>-->

			<!-- Con checkbox -->

			<label>
				<input
				type="checkbox"
				name="checkedIn"
				[ngModel]="detail?.checkedIn"
				(ngModelChange)="toggleCheckedIn($event)">
				Si
			</label>

		</div>

		<div *ngIf="form.value.checkedIn">
			Fecha de checkIn:
			<input
			type="number"
			name="checkInDate"
			[ngModel]="detail?.checkInDate">
		</div>

		<div>
			Luggage:
			<select
				name="baggage"
				[ngModel]="detail?.baggage">
				<option
				*ngFor="let item of baggage"
				[value]="item.key"
				[selected]="item.key === detail?.baggage">
					{{item.value}}
				</option>
			</select>

			<!--<select
				name="baggage"
				[ngModel]="detail?.baggage">
				<option
				*ngFor="let item of baggage"
				[ngValue]="item.key">
					{{item.value}}
				</option>
			</select>-->

		</div>

		<button type="submit" [disabled]="form.invalid">
			Actualizar pasajero
		</button>
	</form>

	`
})
export class PassengerFormComponent{

	@Input()
	detail: Passenger;

	@Output()
	update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	baggage: Baggage[] = [{
		key: 'none',
		value: 'No baggage'
	},{
		key: 'hand-only',
		value: 'Hand baggage'
	},{
		key: 'hold-only',
		value: 'Hold baggage'
	},{
		key: 'hand-hold',
		value: 'Hand and Hold baggage'
	}]

	toggleCheckedIn(checkedIn: boolean){
		if(checkedIn){
			this.detail.checkInDate = Date.now()
		}
	}

	handleSubmit(passenger: Passenger, isValid: boolean){
		if(isValid){
			this.update.emit(passenger);
		}
	}

}
