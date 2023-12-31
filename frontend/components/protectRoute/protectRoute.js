'use client'
import { isAuthenticated, getUserRole } from "@/lib/authService";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export const ProtectRoute = ({ children, requiredRole }) => {
	const router = useRouter();

	useEffect(()=>{
		if(!(isAuthenticated() && requiredRole.includes(getUserRole()))){
			router.push('/login');
		}
	}, [isAuthenticated(), getUserRole()])

	return (
		<>{children}</>
	)
}

