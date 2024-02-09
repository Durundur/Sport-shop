'use client'
import { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCart(JSON.parse(window?.localStorage?.getItem('cart') || '{ "id": "", "customer": "", "products": [] }'));
		}
	}, []);


	const addToCart = (newProduct) => {
		const newProductShort = {
			id: newProduct.id,
			name: newProduct.name,
			newPrice: newProduct.newPrice,
			oldPrice: newProduct.oldPrice,
			quantity: 1,
			images: newProduct.images,
		};

		const existingProduct = cart.products.find(
			(product) => product.id === newProductShort.id
		);

		if (existingProduct) {
			const updatedCart = {
				...cart,
				products: cart.products.map((product) =>
					product.id === newProductShort.id
						? { ...product, quantity: product.quantity + 1 }
						: product
				),
			};
			setCart(updatedCart);
			window.localStorage.setItem('cart', JSON.stringify(updatedCart));
		} else {
			const updatedCart = {
				...cart,
				products: [...cart.products, newProductShort],
			};
			setCart(updatedCart);
			window.localStorage.setItem('cart', JSON.stringify(updatedCart));
		}
	};

	const removeFromCart = (productId) => {
		const updatedCart = {
			...cart,
			products: cart.products.filter((product) => product.id !== productId),
		};
		setCart(updatedCart);
		window.localStorage.setItem('cart', JSON.stringify(updatedCart));
	};

	const updateCart = (updatedProduct) => {
		const updatedCart = {
			...cart,
			products: cart.products.map((product) =>
				product.id === updatedProduct.id
					? { ...product, quantity: updatedProduct.quantity }
					: product
			),
		};
		setCart(updatedCart);
		window.localStorage.setItem('cart', JSON.stringify(updatedCart));
	};


	const clearCart = () => {
		const updatedCart = {
			...cart,
			products: [],
		};
		setCart(updatedCart);
		window.localStorage.setItem('cart', JSON.stringify(updatedCart));
	};


	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};