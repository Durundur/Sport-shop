'use client'
import Input from '@/components/forms/input';
import { fetchWrapper } from '@/lib/fetchWrapper';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {handleInputChange} from '@/lib/formHelpers';

export default function Register() {
	const [registerBody, setRegisterBody] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	});
	const [registerResponse, setRegisterResponse] = useState(null);
	const router = useRouter();
	const [repeatPass, setRepeatPass] = useState("");
	const [isPassError, setIsPassError] = useState(false);

	async function handleSubmit(e){
		e.preventDefault();
		if (!checkIfPasswordsAreEqual()){
			setIsPassError(true);
			return;
		}
		try{
			const response = await fetchWrapper.post("/api/auth/login", credentials);
			handleAuthResponse(response, router);
		}catch(error){
			setRegisterResponse(error);
			setRegisterBody( prevBody => { return {...prevBody, password: ""}});
			setRepeatPass("");
		}
	}


	function checkIfPasswordsAreEqual(){
		if(registerBody.password === repeatPass) return true;
		return false;
	}

	
	return (
		<section className="px-4 flex flex-col lg:flex-row lg:justify-evenly lg:px-0 mx-auto max-w-screen-xl py-12">
			<form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col flex-nowrap gap-4 lg:w-1/4'>
				<h1 className='text-[18px] font-medium'>Zakładanie konta</h1>
				<Input name='firstName' value={registerBody.firstName} onChange={e => handleInputChange(e, setRegisterBody)} required={true} max={50} min={3} placeholder='Imię'></Input>					
				<Input name='lastName' value={registerBody.lastName} onChange={e => handleInputChange(e, setRegisterBody)} required={true} max={50} min={3} placeholder='Nazwisko'></Input>
				<Input name='email' value={registerBody.email} onChange={e => handleInputChange(e, setRegisterBody)} required={true} max={50} min={3} type='email' placeholder='Adres email'></Input>
				<Input name='password' value={registerBody.password} onChange={e => handleInputChange(e, setRegisterBody)} required={true} max={50} min={3} type='password' placeholder='Hasło'></Input>
				<Input value={repeatPass} onChange={e => setRepeatPass(e.target.value)} name='repeatPassword' type='password' placeholder='Powtórz hasło'></Input>
				<span className='text-red-400'>{isPassError ? "Hasła nie są identyczne" : registerResponse?.message}</span>
				<button className='bg-orange-primary hover:bg-orange-secondary active:bg-orange-secondary text-white-primary py-2 w-full rounded-md md:w-1/5 lg:w-full'>Załóż konto</button>
			</form>
		</section>
	)
}
