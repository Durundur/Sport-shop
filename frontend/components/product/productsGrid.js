import ProductSquarePreview from './ProductSquarePreview';

export default function ProductsGrid({products}){
	return(
		<section className='max-w-screen-xl mx-auto'>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 gap-2'>
				{
					products?.map((product, i) => <ProductSquarePreview product={product} key={i} />)
				}
			</div>
		</section>
	)
}