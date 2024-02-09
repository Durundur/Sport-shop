import { NextResponse } from 'next/server'

export function middleware(request) {
	let token = request.cookies.get('access_token');
	let role = request.cookies.get('user_role');
	let isLoggedIn = (token && role);
	if (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/order')) {
		if (isLoggedIn) {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL('/login', request.url))
	}
	if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')) {
		if (isLoggedIn) {
			return NextResponse.redirect(new URL('/', request.url))
		}
		return NextResponse.next();
	}

}