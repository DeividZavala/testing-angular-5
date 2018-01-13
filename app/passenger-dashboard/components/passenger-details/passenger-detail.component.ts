import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
	selector: 'passenger-detail',
	styleUrls: ['passenger-detail.component.scss'],
	template: `

	<div>

		<span class="status"
		[ngClass]="{'checked-in': detail.checkedIn}"></span>
		<div *ngIf="editing">
			<input
				type="text"
				[value]="detail.fullname"
				(input)="onNameChange(name.value)"
				#name
			/>
		</div>
		<div *ngIf="!editing">{{detail.fullname}}</div>
		<div class="date">
			check in date: {{ detail.checkInDate ? (detail.checkInDate | date: "yMMMMd"):"No disponible" }}
		</div>
		<button (click)="toggleEdit()">
			{{ editing ? 'Hecho':'Editar'}}
		</button>
		<button (click)="onRemove()">
			Borrar
		</button>

		<button (click)="goToPassenger()">
			Ver Pasajero
		</button>

	</div>

	`
})
export class PassengerDetailComponent implements OnChanges{

	@Input()
	detail: Passenger;

	@Output()
	remove:  EventEmitter<Passenger> = new EventEmitter<Passenger>();

	@Output()
	edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	@Output()
	view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	editing: boolean = false;

	ngOnChanges(changes){
		if(changes.detail){
			this.detail = Object.assign({}, changes.detail.currentValue);
		}
	}

	onNameChange(value: string) {
		this.detail.fullname = value;
	}

	toggleEdit() {
		if (this.editing) {
			this.edit.emit(this.detail);
		}
		this.editing = !this.editing;
	}

	onRemove() {
		this.remove.emit(this.detail);
	}

	goToPassenger(){
		this.view.emit(this.detail)
	}

}
