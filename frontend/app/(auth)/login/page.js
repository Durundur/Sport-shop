import Divider from '@/components/divider/divider'
import Link from 'next/link';
import { IoCheckmark } from "react-icons/io5";
import Input from '@/components/forms/input';

export default function Login() {
	return (
		<div className="px-4 flex flex-col lg:flex-row lg:justify-evenly lg:px-0 mx-auto max-w-screen-xl py-12">
			<section className='flex flex-col flex-nowrap gap-4 lg:w-1/4'>
				<h1 className='text-[18px] font-medium'>Logowanie</h1>
				<Input placeholder='Adres email'></Input>
				<Input placeholder='Hasło'></Input>
				<div className='flex flex-col gap-4 md:flex-row lg:flex-col'>
					<button className='bg-green-primary hover:bg-green-secondary active:bg-green-secondary text-white-primary py-2 w-full rounded-md md:w-1/5 lg:w-full'>Zaloguj się</button>
					<span className='text-center self-center'>
						<Link className='hover:text-green-primary text-[12px] duration-300' href={'./forgot-password'}>Nie pamiętasz hasła?</Link>
					</span>
				</div>
			</section>
			<Divider/>
			<section className='flex flex-col flex-nowrap gap-4 lg:w-1/4'>
				<h1 className='text-[18px] font-medium'>Nie masz konta?</h1>
				<Link href='/register'>
					<button className='bg-orange-primary hover:bg-orange-secondary active:bg-orange-secondary text-white-primary py-2 w-full rounded-md md:w-1/5 lg:w-full'>Załóż konto</button>
				</Link>
				<span className='font-bold text-[13px] mt-4'>Dlaczego warto założyć konto?</span>
				<ul className='flex flex-col gap-2 text-[13px]'>
					<li className='flex flex-nowrap align-center content-center gap-2'>
						<IoCheckmark className='text-green-primary text-3xl'/>
						<span className='self-center'>dostęp do historii zamówień</span>
					</li>
					<li className='flex flex-nowrap align-center content-center gap-2'>
						<IoCheckmark className='text-green-primary text-3xl' />
						<span className='self-center'>szybsze składanie kolejnych zamówień</span>
					</li>
					<li className='flex flex-nowrap align-center content-center gap-2'>
						<IoCheckmark className='text-green-primary text-3xl' />
						<span className='self-center'>przechowywanie produktów w schowku</span>
					</li>
					<li className='flex flex-nowrap align-center content-center gap-2'>
						<IoCheckmark className='text-green-primary text-3xl'/>
						<span className='self-center'>możliwość oceniania produktów</span>
					</li>
					<li className='flex flex-nowrap align-center content-center gap-2'>
						<IoCheckmark className='text-green-primary text-3xl' />
						<span className='self-center'>korzystaj z rabatów i promocji</span>
					</li>
				</ul>
			</section>
		</div>
	)
}


