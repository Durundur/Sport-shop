import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('access_token');
export const isAuthenticated = () => !!getAccessToken();
export const getUserRole = () => Cookies.get('user_role');


export const handleAuthResponse = async (authResponse, router) => {
	if (!isAuthenticated()) {
		try {
			const expires = (authResponse.expiresIn || 60 * 60 * 1000);
			const inOneHour = new Date(new Date().getTime() + expires);
			Cookies.set('access_token', authResponse.token, { expires: inOneHour });
			Cookies.set('user_role', authResponse.role, { expires: inOneHour });
			redirectToHome(router);
			return true;
		} catch (error) {
			redirectToLogin(router);
			return false;
		}
	}
	redirectToHome(router);
	return false;
}


const redirectToLogin = router => {
	router.push('./login');
}

const redirectToHome = router => {
	router.push('./');
}

export const logout = () => {
	Cookies.remove('access_token');
}
