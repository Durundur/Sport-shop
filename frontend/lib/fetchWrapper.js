import { isAuthenticated, getAccessToken, logout} from './authService';

export const fetchWrapper = {
	get,
	post,
	put,
	delete: _delete
};

function get(url) {
	const requestOptions = {
		method: 'GET',
		headers: authHeader()
	};
	return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions).then(handleResponse);
}

function post(url, body) {
	const requestOptions = {
		method: 'POST',
		headers: { "Content-Type": "application/json", ...authHeader()},
		body: JSON.stringify(body),
	};
	return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions).then(handleResponse);
}

function put(url, body) {
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', ...authHeader() },
		body: JSON.stringify(body)
	};
	return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions).then(handleResponse);
}

function _delete(url) {
	const requestOptions = {
		method: 'DELETE',
		headers: authHeader()
	};
	return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions).then(handleResponse);
}


function authHeader() {
	if (isAuthenticated()) {
		return { Authorization: `Bearer ${getAccessToken()}` };
	}
	return {};
}

function handleResponse(response) {
	if (!response.ok) {
		if ([401, 403].includes(response.status) && isAuthenticated()) {
			logout();
		}
		return response.json()
			.then( response => Promise.reject(response));
	}
	return response.json()
		.then( response => response);
}