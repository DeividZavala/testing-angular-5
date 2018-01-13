import { Component } from '@angular/core';

interface Nav{
	link: string,
	name: string,
	exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `

  <div class="app">
	<nav class="nav">

		<a
			*ngFor="let item of nav"
			[routerLink]="item.link"
			routerLinkActive="active"
			[routerLinkActiveOptions]="{exact: item.exact}">
				{{item.name}}
		</a>


	</nav>

	<router-outlet></router-outlet>
  </div>

  <!--<div>
	<button (click)="handleClick(username.value)">Picale Papá</button>

	<input
	#username
	/>
	<div>
		{{name}}
	</div>


	<div>
		<input
		[value]="name"
		(input)="handleChange($event)"
		/>
	</div>

	<template [ngIf]="name.length > 2">
		Buscando...{{name}}
	</template>

	<div *ngIf="name.length > 2">
		Buscando...{{name}}
	</div>
  </div>

  <div>
	<passenger-dashboard></passenger-dashboard>
  </div>

  <div>
	<router-outlet></router-outlet>
  </div>-->

  `
})
export class AppComponent{
	title: string;
	name: string;
	nav:  Nav[] = [
			{
			link: '/',
			name: 'Home',
			exact: true
		},{
			link: '/oopsss',
			name: '404',
			exact: false
		},
		{
			link: '/passengers',
			name: 'Passengers',
			exact: false
		}
	]

	constructor(){
		this.title = 'Testing angular 5';
		this.name = '';
	}

	handleChange(event: any){
		this.name = event.target.value;
	}

	handleClick(value: string){
		this.name = value;
	}

}
