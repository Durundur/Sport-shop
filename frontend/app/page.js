import ProductsGrid from '@/components/product/productsGrid';
import { LinkWithUnderline } from '@/components/link/link';
import { getNewestProducts, getRecommendedProducts } from './api/products';
import Carousel from '@/components/carousel/carousel';

const data = ['https://cdn.sport-shop.pl/b/v1/05d2fc6a7149217819ff807904dd8e00.jpg', 'https://cdn.sport-shop.pl/b/v1/aada8e64d7a99fd7aee54d490c5aa0e5.jpg', 'https://cdn.sport-shop.pl/b/v1/428398f1b52bf966b50b8f5b15f934f5.jpg', 'https://cdn.sport-shop.pl/b/v1/5f9dfdea4824999776fced5080e326d8.jpg']

export default async function Home() {
	const newestProducts = await getNewestProducts();
	const recommendedProducts = await getRecommendedProducts();
	return (
		<main className="flex flex-col items-center flex-nowrap justify-between">
			<Carousel slides={data}/>
			<div className='py-6'>
				<h1 className={'text-[18px] font-medium'}><LinkWithUnderline href={'/newest'}>Najnowsze produkty</LinkWithUnderline></h1>
				<ProductsGrid products={newestProducts} />
			</div>
			<div className='py-6'>
				<h1 className={'text-[18px] font-medium'}><LinkWithUnderline href={'/best'}>Najlepsze okazje dla Ciebie</LinkWithUnderline></h1>
				<ProductsGrid products={recommendedProducts} />
			</div>
		</main>
	)
}
