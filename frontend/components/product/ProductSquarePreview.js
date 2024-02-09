'use client'
import Image from 'next/image';
import {LinkWithUnderline} from '../link/link';
import Link from 'next/link';
import { IoHeartOutline } from "react-icons/io5";

export default function ProductSquarePreview({product}){
	let discount = product?.oldPrice ? Math.round((product?.oldPrice - product?.newPrice)*100/product?.oldPrice) : 0;

	return(
		<div className={'flex flex-col gap-2 flex-nowrap hover:shadow-[0_0_10px_rgba(0,0,0,.3)] transition-shadow duration-[300ms] rounded-md p-4 row-span-1 col-span-1'}>
			<Link className={'relative'} href={`/product/${product?.id}`}>
				<div>
					<span onClick={()=>{}} className={'absolute top-0 right-0 z-2 w-6 h-6'}>
						<IoHeartOutline className='w-full h-full hover:scale-125 hover:text-red-500 transition-scale duration-300'/>
					</span>
				</div>
				<Image className='w-full aspect-square object-contain' src={product?.images[0]} width={150} height={150} alt={product?.name}/>
				{discount != 0 ? <span className={'bg-red-500 bottom-0 text-white-primary py-[2px] px-[6px] rounded-md text-[12px] absolute'}>{discount}%</span> : <></>}
			</Link>
			<div className='h-[32px] basis-full'>
				<LinkWithUnderline href={`/product/${product?.id}`}>{product?.name}</LinkWithUnderline>
			</div>
			<div className={'flex justify-start gap-2 flex-nowrap whitespace-nowrap'}>
				<p className={'text-orange-primary font-medium'}>{product?.newPrice} zł</p>
				{
					product?.oldPrice ? <p className={'text-gray-400 line-through decoration-solid'}>{product?.oldPrice} zł</p> : <></>
				}
				
			</div>
		</div>
	)
}