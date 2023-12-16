import Link from 'next/link';
import Input from '../../../components/forms/input'

export default function Register() {
	return (
		<section className="px-4 flex flex-col lg:flex-row lg:justify-evenly lg:px-0 mx-auto max-w-screen-lg py-12">
			<div className='flex flex-col flex-nowrap gap-4 lg:w-1/4'>
				<h1 className='text-[18px] font-medium'>Zakładanie konta</h1>
				<Input placeholder='Imię'></Input>
				<Input placeholder='Nazwisko'></Input>
				<Input placeholder='Adres email'></Input>
				<Input placeholder='Hasło'></Input>
				<Input placeholder='Powtórz hasło'></Input>
	
				<button className='bg-orange-primary hover:bg-orange-secondary active:bg-orange-secondary text-white-primary py-2 w-full rounded-md md:w-1/5 lg:w-full'>Załóż konto</button>
			</div>
		</section>
	)
}
