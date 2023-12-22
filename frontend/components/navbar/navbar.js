'use client'
import Link from "next/link";
import { IoCartOutline, IoPersonOutline, IoHeartOutline, IoSearchSharp } from "react-icons/io5";
import { Logo } from "../logo/logo";
import { Input } from "../input/input";
import { TfiPackage } from "react-icons/tfi";
import { IoHomeOutline, IoSettingsOutline, IoStarOutline, IoLogOutOutline } from "react-icons/io5";
import {useState} from 'react';
import CategoriesBar from './categoriesBar';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<nav className="w-100 bg-black-primary text-white-primary">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between gap-5 mx-auto py-4 px-2">
				<Link href="/">
					<Logo />
				</Link>

				<Input RightIcon={IoSearchSharp} onRightIconClick={() => { }} placeholder={'Czego szukasz?'}></Input>

				<div className={'flex flex-row align-middle justify-between gap-4'}>
					<div>
						<IoPersonOutline onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-7 h-7 cursor-pointer hover:scale-125 transition-scale duration-300 relative" />
						{
							isMenuOpen ? <Menu/> : <></>
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
			<CategoriesBar/>
		</nav>
	)
}



function Menu() {
	return (
		<div className="absolute bg-stone-100 z-20 rounded-md text-black-primary shadow-[0_0_10px_rgba(0,0,0,.3)] -translate-x-[200px] translate-y-2">
			<div className="flex flex-col gap-2 p-2">
				<Link href='/dashboard/orders' className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
					<TfiPackage className='text-lg self-center' />
					<span>Zamówienia</span>
				</Link>

				<Link href='/dashboard/address' className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
					<IoHomeOutline className='text-lg self-center' />
					<span >Dane adresowe</span>
				</Link>

				<Link href='/dashboard/settings' className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
					<IoSettingsOutline className='text-lg self-center' />
					<span >Ustawienia konta</span>
				</Link>

				<Link href='/dashboard/reviews' className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
					<IoStarOutline className='text-lg self-center' />
					<span >Oceń zakupione produkty</span>
				</Link>

				<Link href='/logout' className='flex flex-nowrap gap-2 bg-white-primary rounded-lg p-2 whitespace-nowrap hover:bg-stone-50 hover:shadow-md'>
					<IoLogOutOutline className='text-lg self-center' />
					<span>Wyloguj się</span>
				</Link>
			</div>
		</div>
	)
}