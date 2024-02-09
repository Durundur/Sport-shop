'use client'
import { fetchWrapper } from '@/lib/fetchWrapper';
import { useEffect, useState } from "react";
import { OrderListItem } from '@/components/orders/orderListItem';

export default function Orders() {
	const [orders, setOrders] = useState();

	useEffect(() => {
		fetchWrapper.get('/api/orders/user').then((orders) => setOrders(orders))
	}, [])
	
	return (
		<div className='flex flex-col gap-4 p-4'>
			<h1 className='text-lg font-medium'>Zamówienia</h1>
			<section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{
				(Array.isArray(orders) && orders.length > 0) ?
					orders.map((order) => <OrderListItem key={order.id} order={order}/>)
					: <span>Nie masz jeszcze żadnych złożonych zamówień.</span>
			}
			</section>
		</div>
	)
}