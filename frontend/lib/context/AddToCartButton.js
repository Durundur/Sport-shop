'use client'
import { useCart } from '@/lib/context/CartContex';


export function AddToCartButton({ product }) {
	const { cart, addToCart, removeFromCart, updateCart } = useCart();

	return (
		<button onClick={() => addToCart(product)} className="w-full bg-red-secondary dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-primary dark:hover:bg-gray-700">Dodaj do koszyka</button>
	)
}