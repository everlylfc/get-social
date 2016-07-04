import {Injectable} from 'angular2/core';
import {User} from './user';

@Injectable()
export class UserService {

	createUser(username: string, fn: string, ln: string, birthdate: string) {
		var user: User = {
		"id" : username,
		"firstname" : fn,
		"lastname" : ln,
		"dob" : birthdate };
		return user;
	}

	getUser() {
		var user: User = this.createUser('everlylfc', 'Mike', 'Bracht', '05/26/1993');
		return user;
	}
}
