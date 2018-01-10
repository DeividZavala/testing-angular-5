import { Injectable } from "@angular/core";

import { Passenger } from "./models/passenger.interface";
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Observable";

const PASSEGERS_API = "/api/passengers";

@Injectable()
export class PassegnerDashboardService{

	constructor(private http: Http){}

	getPassengers(): Observable<Passenger[]> {
		return this.http.get(PASSEGERS_API)
			.map((response: Response) => {
				return response.json();
			})
	}

	updatePassengers(passenger: Passenger): Observable<Passenger> {
		return this.http.put(`${PASSEGERS_API}/${passenger.id}`, passenger)
			.map((response: Response) => {
				return response.json();
			})
	}

	removePassengers(passenger: Passenger): Observable<Passenger> {
		return this.http.delete(`${PASSEGERS_API}/${passenger.id}`)
			.map((response: Response) => {
				return response.json();
			})
	}

}
