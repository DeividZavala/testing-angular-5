import { Component } from "@angular/core";


@Component({
	selector: 'not-found',
	template: `

		<h1>404 no se puede encontrar la pagina que solicitaste <a routerLink="/">Ir al inicio</a></h1>


	`
})
export class NotFoundComponent{}
