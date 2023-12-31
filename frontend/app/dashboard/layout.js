import { TfiPackage } from "react-icons/tfi";
import { IoHomeOutline, IoSettingsOutline, IoStarOutline } from "react-icons/io5";
import Link from 'next/link';
import { ProtectRoute } from "@/components/protectRoute/protectRoute";

export default function DashboardLayout({ children }) {
	return (
		<ProtectRoute requiredRole={["ROLE_ADMIN", "ROLE_USER"]}>
		<div className='max-w-screen-xl mx-auto flex flex-col px-2 lg:px-0 py-4 gap-4'>
			<aside>
				<h1 className='text-center font-medium text-lg'>Moje konto</h1>
				<div className="flex flex-row overflow-y-auto gap-6 p-4">
					<Link href='/dashboard/orders' className='flex flex-nowrap gap-2 bg-stone-100 rounded-lg p-2 whitespace-nowrap'>
						<TfiPackage className='text-lg self-center'/>
						<span>Zamówienia</span>						
					</Link>
					
					<Link href='/dashboard/address' className='flex flex-nowrap gap-2 bg-stone-100 rounded-lg p-2 whitespace-nowrap'>
						<IoHomeOutline className='text-lg self-center' />
						<span >Dane adresowe</span>
					</Link>

					<Link href='/dashboard/settings' className='flex flex-nowrap gap-2 bg-stone-100 rounded-lg p-2 whitespace-nowrap'>
						<IoSettingsOutline className='text-lg self-center' />
						<span >Ustawienia konta</span>
					</Link>

					<Link href='/dashboard/reviews' className='flex flex-nowrap gap-2 bg-stone-100 rounded-lg p-2 whitespace-nowrap'>
						<IoStarOutline className='text-lg self-center' />
						<span >Oceń zakupione produkty</span>
					</Link>
				</div>
			</aside>
			{children}
		</div>
		</ProtectRoute>
	)
}