'use client'
import Image from 'next/image';
import {LinkWithUnderline} from '../link/link';
import Link from 'next/link';
import { IoHeartOutline } from "react-icons/io5";

export default function ProductRecPreview({product}){
	return(
		<div className={'flex flex-col gap-2 flex-nowrap hover:shadow-[0_0_10px_rgba(0,0,0,.3)] transition-shadow duration-[400ms] rounded-md p-4 row-span-1 col-span-1'}>
			<Link className={'relative'} href={`/product/${product?.id}`}>
				<span onClick={()=>{}} className={'absolute top-0 right-0 z-2 w-6 h-6'}>
					<IoHeartOutline className='w-full h-full'/>
				</span>
				<Image className='w-full h-full' src={product?.image} width={230} height={300} alt={"dsjai"} />
				<span className={'bg-red-500 bottom-0 text-white-primary py-[2px] px-[6px] rounded-md text-[12px] absolute'}>-37%</span>
			</Link>
			<div className='h-[32px] basis-full'>
				<LinkWithUnderline href={'./'}>{product?.name}</LinkWithUnderline>
			</div>
			<div className={'flex justify-start gap-4 flex-nowrap whitespace-nowrap'}>
				<p className={'text-orange-primary font-medium'}>{product?.newPrice} zł</p>
				<p className={'text-gray-400 line-through decoration-solid'}>{product?.oldPrice} zł</p>
			</div>
		</div>
	)
}