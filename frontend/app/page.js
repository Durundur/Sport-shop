import ProductsGrid from '@/components/product/productsGrid';
import { LinkWithUnderline } from '@/components/link/link';
import { getProducts } from './api/products';

export default async function Home() {
	const products = await getProducts();
	return (
		<main className="flex flex-col items-center flex-nowrap justify-between">
			<>
				<div className='py-6'>
					<h1 className={'text-[18px] font-medium'}><LinkWithUnderline href={'/new'}>Najnowsze produkty</LinkWithUnderline></h1>
					<ProductsGrid products={products} />
				</div>
			</>
		</main>
	)
}
