'use client'
import { useCart } from '@/lib/context/CartContex';


export function AddToCartButton({ product }) {
	const { addToCart} = useCart();

	return (
		<button onClick={() => addToCart(product)} className="w-full bg-orange-primary text-white py-2 px-4 rounded-lg font-medium transition-colors shadow-lg hover:bg-orange-secondary">Dodaj do koszyka</button>
	)
}