'use client'
import {useEffect} from 'react';

export default function Error({error, reset}) {

	useEffect(() => {
		console.error(error);
	}, [error])

	return (
		<div className='flex flex-col items-center gap-2 py-12'>
			<h2 className='self-center text-[16px] font-medium'>Błąd</h2>
			<h2 className='self-center text-[16px] font-normal'>{error?.message}</h2>
			<button onClick={() => reset()} className='bg-orange-primary rounded-md py-2 px-4 text-white-primary'>
				Spróbuj ponownie
			</button>
		</div>
	)
}