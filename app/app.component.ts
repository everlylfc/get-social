import {Component} from 'angular2/core';

import {UserService} from './user.service';
import {User} from './user';

@Component({
	selector: 'getsocial',
	template: `
		<h1>GetSocial!</h1>
		<h2>Name: {{firstname}}</h2>
		`,
	providers: [ UserService ]
})

export class AppComponent {

	firstname: string = '';

	constructor (private _userService: UserService){ }

	ngOnInit() {
		var user: User = this._userService.getUser();
		this.firstname = user.firstname;
	}
}
