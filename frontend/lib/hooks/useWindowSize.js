import { useState, useEffect } from "react";

export function useWindowSize(){
	const isClient = typeof window === 'object';
	const [windowSize, setWindowSize] = useState(
		isClient ? [window.innerWidth, window.innerHeight] : [0, 0]
	);

	useEffect(() => {
		if (!isClient) {
			return false;
		}

		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [isClient]);

	return { windowSize };
}