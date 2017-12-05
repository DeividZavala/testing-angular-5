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
	[value]="name"
	(input)="handleInput($event)"
	(blur)="handleBlur($event)"
	/>
	{{name}}
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

	handleInput(event: any){
		this.name = event.target.value;
	}

	handleBlur(event: any){
		this.name = event.target.value;
	}

	handleClick(){
		this.name = 'perro';
	}

}
