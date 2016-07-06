import {Component} from 'angular2/core';

class AppComponent {

	static get annotations() {
		return [
			new Component({
	    		selector: "my-app",
	    		template: '<p>Hello world</p>'
	  		}),
		];
	}

	constructor () {}
}

export {AppComponent};
