import { NextResponse } from 'next/server'

export function middleware(request) {
	if (request.nextUrl.pathname.startsWith('/dashboard')) {
		let token = request.cookies.get('access_token');
		let role = request.cookies.get('user_role');
		if(token && role){
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL('/login', request.url))
	}
}