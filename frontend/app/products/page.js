'use client'
import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { fetchWrapper } from '@/lib/fetchWrapper';
import ProductsGrid from '@/components/product/productsGrid';
import Categories from '@/components/categories/categories';
import Pagination from '@/components/pagination/pagination';

export default async function Products() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const [products, setProducts] = useState();
	const priceInputRef = useRef();
	const priceFilter = searchParams.get('price') || "";

	const applayFilters = () => {
		if (!priceInputRef.current.value) {
			const updatedSearchParams = new URLSearchParams(searchParams.toString());
			updatedSearchParams.delete('price');
			router.push(`${pathname}?${updatedSearchParams.toString()}`);
			return;
		}
		const updatedSearchParams = new URLSearchParams(searchParams.toString());
		updatedSearchParams.set('price', priceInputRef.current.value);
		router.push(`${pathname}?${updatedSearchParams.toString()}`);
	}

	useEffect(() => {
		fetchWrapper.get(`/api/products/search?${searchParams?.toString()}`).then((products) => setProducts(products));
	}, [searchParams.toString()])

	return (
		<section className='max-w-screen-xl mx-auto'>
			<div className='grid grid-cols-5 py-10'>
				<aside className='col-span-1'>
					<span className='font-medium text-[16px]'>Kategorie</span>
					<Categories className='flex flex-col gap-2 my-4' />
					<div className='flex flex-col gap-2 my-2'>
						<label htmlFor='price' className='font-medium text-[16px]'>Cena</label>
						<input ref={priceInputRef} defaultValue={priceFilter} name='price' id='price' placeholder='do' className='w-1/2 p-2 border rounded-md border-gray-300 active:border-gray-400 outline-1 outline-gray-400' type='number'></input>
					</div>
					<button onClick={() => applayFilters()} className='py-2 px-4 bg-orange-primary hover:bg-orange-secondary rounded-md text-white-primary shadow-sm'>Zatwierdz</button>
				</aside>
				<main className='col-span-4'>
					{products?.content.length > 0 ? <div>
						<div className='flex flex-row justify-end'>
							<Pagination currentPage={products?.number} totalPages={products?.totalPages} pathname={pathname} />
						</div>
						<ProductsGrid products={products?.content} />
						<div className='flex flex-row justify-end'>
							<Pagination currentPage={products?.number} totalPages={products?.totalPages} pathname={pathname} />
						</div>
					</div> : <div className='text-orange-primary font-semibold text-[18px]'> Nie znaleziono produktów o podanych kryteriach!</div>
					}
				</main>
			</div>
		</section>
	)
}