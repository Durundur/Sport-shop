import { LinkWithUnderline } from "../link/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchWrapper } from "@/lib/fetchWrapper";
import Link from "next/link";

export function ProductListItem({ product }) {
	const [productInfo, setProductInfo] = useState();
	
	useEffect(() => {
		fetchWrapper.get(`/api/products/${product.id}`).then((product) => setProductInfo(product));
	}, [])


	return (
		<div className="flex flex-row justify-between items-center bg-white-primary rounded-md p-4 gap-4">
			<Link href={`/product/${product.product}`}>
				<Image className='w-[120px] aspect-square object-contain' src={productInfo?.images[0]} width={150} height={150} alt={product.name} />
			</Link>
			<LinkWithUnderline href={`/product/${product.id}`}>{product.name}</LinkWithUnderline>
			<span> {product.quantity} x {product.newPrice} zł</span>
			<span> {product.quantity * product.newPrice} zł</span>
		</div>
	)
}