'use client'
import Image from 'next/image';

export default function FeaturesBar(){
	return(
		<section className="w-full bg-gray-primary">
			<div className="max-w-screen-xl mx-auto py-6">
				<div className="flex text-blue-primary text-xs text-center flex-wrap gap-y-4">
					<div className="flex flex-col items-center w-1/3 md:w-1/5 gap-4">
						<Image src={'/icon1.png'} width={50} height={50} alt={'icon1'} />
						<p className={'w-3/4'}>99% naszych klientów nas poleca</p>
					</div>
					<div className="flex flex-col items-center w-1/3 md:w-1/5 gap-4">
						<Image src={'/icon2.png'} width={50} height={50} alt={'icon2'} />
						<p className={'w-3/4'}>Tylko oryginalne produkty</p>
					</div>
					<div className="flex flex-col items-center w-1/3 md:w-1/5 gap-4">
						<Image src={'/icon3.png'} width={50} height={50} alt={'icon3'} />
						<p className={'w-3/4'}>30 dni na zwrot zamówienia</p>
					</div>
					<div className="flex flex-col items-center w-1/2 md:w-1/5 gap-4">
						<Image src={'/icon4.png'} width={50} height={50} alt={'icon4'} />
						<p className={'w-3/4'}>Darmowa dostawa od 350zł</p>
					</div>
					<div className="flex flex-col items-center w-1/2 md:w-1/5 gap-4">
						<Image src={'/icon5.png'} width={50} height={50} alt={'icon5'} />
						<p className={'w-3/4'}>Ponad 15 lat doświadczenia</p>
					</div>
				</div>
			</div>
		</section>

	)
}