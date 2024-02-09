import Link from "next/link";
import lib from '@/lib/lib';


export function OrderListItem({ order }) {
	return (
		<div className="flex flex-col bg-gray-primary rounded-md p-4 gap-4">
			<div className="flex flex-row justify-between">
				<span>Nr. zamówienia</span>
				<span>{order.id}</span>
			</div>
			<div className="flex flex-row justify-between">
				<span>Data złożenia:</span>
				<span>{new Date(order.createdOn).toLocaleString()}</span>
			</div>
			<div className="flex flex-row justify-between">
				<span>Status:</span>
				<span>{order.status}</span>
			</div>
			<div className="flex flex-row justify-between">
				<span>Wartość:</span>
				<span>{`${lib.calculateOrderValue(order.products)} zł`}</span>
			</div>
			<div className="self-center">
				<Link href={`./orders/${order.id}`}>
					<button className="bg-orange-primary py-2 px-4 text-white-primary rounded-md hover:bg-orange-secondary">Pokaż szczegóły</button>
				</Link>
			</div>
		</div>
	)
}