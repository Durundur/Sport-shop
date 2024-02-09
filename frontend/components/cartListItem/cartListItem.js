import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/context/CartContex';
import { IoCloseOutline } from "react-icons/io5";


export function CartListItem({ product }) {
	const { updateCart, removeFromCart } = useCart();

	const handleQuantityChange = (newQuantity) => {
		updateCart({
			id: product.id,
			quantity: newQuantity,
		});
	};

	const handleRemoveClick = () => {
		removeFromCart(product.id);
	};

	return (
		<div className="flex flex-row justify-between items-center bg-white-primary rounded-md p-4 gap-4 border-b-2 border-gray-100">
			<Link href={`/product/${product.id}`}>
				<Image
					className="w-[120px] aspect-square object-contain cursor-pointer"
					src={product?.images[0]}
					width={150}
					height={150}
					alt={product.name}
				/>
			</Link>
			<Link href={`/product/${product.id}`} className="cursor-pointer">{product.name}</Link>
			<div className="flex flex-row gap-4">
				<span>{product.newPrice} zł</span>
				{product.oldPrice ? <span className="text-orange-primary line-through decoration-solid">{product.oldPrice} zł</span> : <></>}
			</div>
			<div className="flex items-center gap-4 justify-center">
				<button className='bg-orange-primary hover:bg-orange-secondary rounded-md text-lg py-1 px-1 text-white-primary'
					onClick={() => handleQuantityChange(product.quantity - 1)}
					disabled={product.quantity <= 1}
				>
					-
				</button>
				<span>{product.quantity}</span>
				<button className='bg-orange-primary hover:bg-orange-secondary rounded-md text-lg py-1 px-1 text-white-primary' onClick={() => handleQuantityChange(product.quantity + 1)}>+</button>
			</div>
			<span>{product.quantity * product.newPrice} zł</span>
			<button className='bg-orange-primary hover:bg-orange-secondary rounded-md text-lg py-1 px-1 text-white-primary' onClick={handleRemoveClick}>
				<IoCloseOutline />
			</button>
		</div>
	);
}