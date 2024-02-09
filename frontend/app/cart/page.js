'use client'
import { useCart } from "@/lib/context/CartContex";
import { CartListItem } from "@/components/cartListItem/cartListItem";
import lib from "@/lib/lib";
import Link from "next/link";

export default function Cart() {
	const { cart } = useCart();
	const isCartEmpty = !(Array.isArray(cart?.products) && cart?.products.length > 0);

	return (
		<main className="max-w-screen-xl mx-auto">
			<div className='flex flex-col gap-4 py-4'>
				<h1 className='text-lg font-medium'>Twój Koszyk</h1>
				{
					isCartEmpty ?
						<div className="flex flex-col justify-center items-center gap-4 p-8">
							<h1 className="text-[18px] font-medium">Twój koszyk jest pusty!</h1>
							<Link href={'/'}>
								<button className="bg-orange-primary hover:bg-orange-secondary py-2 px-4 rounded-md text-white-primary">Wróć do zakupów</button>
							</Link>
						</div> :
						<div>
							{cart?.products.map((product) => <CartListItem product={product} />)}
							<div className="flex flex-col items-end gap-6 py-4">
								<div className="flex flex-row justify-center items-center gap-6">
									<span className="text-lg">Wartość koszyka</span>
									<span className="text-orange-primary font-medium text-3xl">{lib.calculateOrderValue(cart?.products)} zł</span>
								</div>
								<Link href={'/order'}>
									<button className="bg-green-600 hover:bg-green-700 rounded-md text-white-primary py-4 px-8">Złóż zamówienie</button>
								</Link>
							</div>
						</div>
				}
			</div>
		</main>
	)
}