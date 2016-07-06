import { Component } from 'angular2/core';

class AppComponent {

	static get annotations() {
		return [
			new Component({
	    		selector: 'my-app',
	    		template: '<h1>Hello {{testVar}}</h1>'
	  		}),
		];
	}

	constructor () {
		this.testVar = 'world!';
	}
}

export { AppComponent };