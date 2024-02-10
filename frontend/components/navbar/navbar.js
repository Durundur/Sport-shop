'use client'
import Link from "next/link";
import { IoCartOutline, IoPersonOutline, IoHeartOutline, IoSearchSharp } from "react-icons/io5";
import { Logo } from "../logo/logo";
import { Input } from "../input/input";
import { TfiPackage } from "react-icons/tfi";
import { IoHomeOutline, IoSettingsOutline, IoStarOutline, IoLogOutOutline, IoMenu, IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import CategoriesBar from './categoriesBar';
import { logout, isAuthenticated, getUserRole } from "@/lib/authService";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { useRouter } from 'next/navigation'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const router = useRouter();
	const { windowSize } = useWindowSize();

	console.log(searchInput);

	useEffect(() => {
		if (isMenuOpen && windowSize[0] <= 768) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

	}, [isMenuOpen, windowSize[0]])

	return (
		<>
			<nav className="w-100 bg-black-primary text-white-primary">
				<div className="max-w-screen-xl flex flex-col md:flex-row flex-wrap justify-between items-center gap-5 mx-auto py-4 px-2">
					<Link href="/">
						<Logo />
					</Link>
					<button className='hidden' onClick={() => setIsMenuOpen(prevState => !prevState)}>
						<IoMenu />
					</button>
					<div>
						<Input RightIcon={IoSearchSharp} onRightIconClick={() => { router.push(`/products?name=${searchInput}`) }} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder={'Szukaj'}></Input>
					</div>
					<div className={'flex flex-row align-middle justify-between gap-4'}>
						<div>
							<IoPersonOutline onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-7 h-7 cursor-pointer hover:scale-125 transition-scale duration-300 relative" />
							{
								isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : <></>
							}
						</div>
						<Link href='/wishlist'>
							<IoHeartOutline className="w-7 h-7 hover:scale-125 transition-scale duration-300" />
						</Link>
						<Link href='/cart'>
							<IoCartOutline className="w-7 h-7 hover:scale-125 transition-scale duration-300" />
						</Link>
					</div>
				</div>
			</nav>
			<CategoriesBar />
		</>
	)
}


function Menu({ setIsMenuOpen }) {
	return (
		<div className="fixed w-screen h-screen md:w-[227px] md:h-auto top-0 left-0 md:absolute md:left-auto md:top-auto bg-stone-100 z-20 md:rounded-md text-black-primary shadow-[0_0_10px_rgba(0,0,0,.3)] md:-translate-x-[200px] md:translate-y-2">
			<div className="flex flex-col gap-2 p-2">
				<button onClick={() => setIsMenuOpen(false)} className="md:hidden text-3xl self-end">
					<IoCloseOutline />
				</button>
				{
					isAuthenticated() ? <>
						<Link href='/dashboard/orders' onClick={() => setIsMenuOpen(false)} className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
							<TfiPackage className='text-lg self-center' />
							<span>Zamówienia</span>
						</Link>

						<Link href='/dashboard/address' onClick={() => setIsMenuOpen(false)} className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
							<IoHomeOutline className='text-lg self-center' />
							<span>Dane</span>
						</Link>

						<Link href='/dashboard/settings' onClick={() => setIsMenuOpen(false)} className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
							<IoSettingsOutline className='text-lg self-center' />
							<span>Ustawienia</span>
						</Link>

						<Link href='/dashboard/reviews' onClick={() => setIsMenuOpen(false)} className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
							<IoStarOutline className='text-lg self-center' />
							<span>Oceń</span>
						</Link>

						{getUserRole() === 'ROLE_ADMIN' ? <Link href='/dashboard/reviews' onClick={() => setIsMenuOpen(false)} className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
							<IoSettingsOutline className='text-lg self-center' />
							<span>Panel administratora</span>
						</Link> : <></>}

						<button onClick={() => { logout(); setIsMenuOpen(false); }} className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
							<IoLogOutOutline className='text-lg self-center' />
							<span>Wyloguj się</span>
						</button>
					</> : <div className="flex flex-col justify-center gap-2 text-center">
						<Link href={'/login'} onClick={() => setIsMenuOpen(false)} className='bg-green-primary hover:bg-green-secondary text-white-primary py-2 w-full rounded-md'>
							Zaloguj się
						</Link>
						<span className="text-xs">lub</span>
						<Link href={'/register'} onClick={() => setIsMenuOpen(false)} className='bg-orange-primary hover:bg-orange-secondary text-white-primary py-2 w-full rounded-md'>
							Zarejestruj się
						</Link>
					</div>
				}
			</div>
		</div>
	)
}