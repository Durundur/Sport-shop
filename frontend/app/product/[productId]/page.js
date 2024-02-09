import { AddToCartButton } from '@/lib/context/AddToCartButton';
import Image from 'next/image';

export async function getProduct(id) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, { cache: 'no-cache' });
	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}
	return await response.json();
}

export default async function Product({ params }) {
	const product = await getProduct(params.productId);


	return (
		<div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-36">
			<div className="flex flex-col md:flex-row -mx-4">
				<div className="md:flex-1 px-8">
					<div className="h-[550px] rounded-lg mb-4 py-4">
						<Image className='w-full aspect-square object-contain' src={product?.images[0]} width={150} height={150} alt={product?.name} />
					</div>
				</div>
				<div className="md:flex-1 px-4">
					<h2 className="text-3xl font-bold text-gray-800 mb-2">{product?.name}</h2>
					<p className="text-gray-600 text-sm mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
						ante justo. Integer euismod libero id mauris malesuada tincidunt.
					</p>
					<div>
						<span className="font-bold text-gray-700">Dostępność: </span>
						<span className="text-gray-600">W magazynie</span>
					</div>
					<div className="flex mb-4 py-6">
						<p className={'text-red-primary font-medium text-3xl'}>{product?.newPrice} zł</p>
						{
							product?.oldPrice ? <p className={'text-gray-400 line-through decoration-solid text-3xl px-6'}>{product?.oldPrice} zł</p> : <></>
						}
					</div>
					<div className="flex -mx-2 mb-4">
						<div className="w-1/2 px-2">
							<AddToCartButton product={product} />
						</div>
						<div className="w-1/2 px-2">
							<button className="w-full bg-sage-secondary dark:bg-gray-700 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-sage-primary">Dodaj do listy życzeń</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}