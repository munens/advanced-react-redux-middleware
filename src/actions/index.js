
import axios from 'axios';

import {
	GET_USERS
} from './types';

export function getUsers(){
	const request = axios.get('https://jsonplaceholder.typicode.com/users');

	return {
		type: GET_USERS,
		payload: {}
	}
}