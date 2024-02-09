'use client'
import { fetchWrapper } from '@/lib/fetchWrapper';
import { useEffect, useState } from "react";
import lib from '@/lib/lib'
import { ProductListItem } from '@/components/orders/productListItem';

export default function Orders({ params }) {
	const [order, setOrder] = useState();
	useEffect(() => {
		fetchWrapper.get(`/api/orders/${params.orderId}`).then((order) => setOrder(order));
	}, [])

	return (
		<div className='flex flex-col gap-4 p-4'>
			<div className="flex flex-col bg-gray-primary rounded-md p-4 gap-4">
				<div className="flex flex-row justify-between">
					<span>Data złożenia:</span>
					<span>{new Date(order?.createdOn).toLocaleString()}</span>
				</div>
				<div className="flex flex-row justify-between">
					<span>Status:</span>
					<span>{order?.status}</span>
				</div>

				<div className="flex flex-row justify-between">
					<span>Metoda płatnosci:</span>
					<span>{order?.paymentMethod}</span>
				</div>
				<div className="flex flex-row justify-between">
					<span>Wartość:</span>
					<span>{`${lib.calculateOrderValue(order?.products)} zł`}</span>
				</div>

				<div className='flex flex-row justify-evenly'>
					<div className='flex flex-col'>
						<span className="text-[16px] font-medium">Dane kontaktowe:</span>
						<span>{order?.firstName} {order?.lastName}</span>
						<span>tel: {order?.phoneNumber}</span>
					</div>


					<div className='flex flex-col'>
						<span className="text-[16px] font-medium">Adres dostawy:</span>
						<span>{order?.street} {order?.buildingNo}</span>
						<span>{order?.postCode} {order?.city}</span>
					</div>
				</div>

				<div>
					{
						order?.products.map((product) => <ProductListItem key={product.id} product={product} />)
					}
				</div>
			</div>
		</div >
	)
}