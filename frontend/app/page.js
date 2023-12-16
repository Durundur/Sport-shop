'use client'

import FeaturesBar from '../components/features/features';
import NewsletterBar from '../components/newsletter/newsletter';
import Footer from '../components/footer/footer';
import ProductsGrid from '../components/product/productsGrid';
import Link from 'next/link';
import { products } from '../components/data'
import { LinkWithUnderline } from '@/components/link/link';



export default function Home() {
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
