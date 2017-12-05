import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `

  <div class="app">
    {{ title }}
  </div>

  <div>
	<button (click)="handleClick()">Picale Papá</button>
	<input
	[ngModel]="name"
	(ngModelChange)="handleChange($event)"
	/>
	<input
	[(ngModel)]="name"
	/>
	<div>
		{{name}}
	</div>

  </div>

  `
})
export class AppComponent{
	title: string;
	name: string;

	constructor(){
		this.title = 'Testing angular 5';
		this.name = 'David';
	}

	handleChange(value: string){
		this.name = value;
	}

	handleClick(){
		this.name = 'perro';
	}

}
