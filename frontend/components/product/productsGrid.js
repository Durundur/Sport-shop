'use client'
import ProductSquarePreview from './productRecPreview';

export default function ProductsGrid({products}){
	return(
		<section className='max-w-screen-lg mx-auto'>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2'>
				{
					products?.map((product, i) => <ProductSquarePreview product={product} key={i} />)
				}
			</div>
		</section>
	)
}