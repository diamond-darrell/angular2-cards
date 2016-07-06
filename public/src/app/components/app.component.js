import {
    Component
} from 'angular2/core';

class AppComponent {

    static get annotations() {
        return [
            new Component({
                selector: 'my-app',
                template: `
					<div class="jumbotron">
        		<div class="container">
          		<h1 class="display-3">Hello, world!</h1>
        			<p class="lead">
								This is a simple hero unit, a simple jumbotron-style component for calling
								extra attention to featured content or information.
							</p>
							<hr class="m-y-md">
          		<p>
								It uses utility classes for typography and spacing to space content out within the
        				larger container.
							</p>
          		<p class="lead">
          			<a class="btn btn-primary btn-lg" href="#" role="button" data-toggle="modal" data-target="#modal">
          				Learn more
            		</a>
          		</p>
        		</div>
      		</div>
					`
            }),
        ];
    }

    constructor() {
        this.testVar = 'world!';
    }
}

export {
    AppComponent
};