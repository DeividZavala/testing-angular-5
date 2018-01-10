import { Injectable } from "@angular/core";

import { Passenger } from "./models/passenger.interface";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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
			.catch((error: any) => Observable.throw(error.json()))
	}

	getPassenger(id: number): Observable<Passenger> {
		return this.http.get(`${PASSEGERS_API}/${id}`)
			.map((response: Response) => {
				return response.json();
			})
			.catch((error: any) => Observable.throw(error.json()))
	}

	updatePassengers(passenger: Passenger): Observable<Passenger> {

		let headers = new Headers({
			'Content-type' : 'application/json'
		})

		let options = new RequestOptions({
			'headers' : headers
		})

		return this.http.put(`${PASSEGERS_API}/${passenger.id}`, passenger)
			.map((response: Response) => {
				return response.json();
			})
			.catch((error: any) => Observable.throw(error.json()))
	}

	removePassengers(passenger: Passenger): Observable<Passenger> {
		return this.http.delete(`${PASSEGERS_API}/${passenger.id}`)
			.map((response: Response) => {
				return response.json();
			})
			.catch((error: any) => Observable.throw(error.json()))
	}

}
