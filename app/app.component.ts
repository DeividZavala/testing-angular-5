import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `

  <div class="app">
    {{ title }}
  </div>

  <div>
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
	<passenger-viewer></passenger-viewer>
  </div>

  `
})
export class AppComponent{
	title: string;
	name: string;

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
