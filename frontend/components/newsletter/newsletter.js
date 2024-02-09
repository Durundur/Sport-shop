'use client'

export default function NewsletterBar() {
	return (
		<section className="bg-blue-primary w-full">
			<div className="max-w-screen-xl mx-auto flex py-4 gap-8 justify-center flex-wrap">
				<div className="flex flex-col items-center md:items-end text-white-primary text-md">
					<div className="uppercase text-[16px] font-bold tracking-wide">zapisz się do newslettera</div>
					<div className="font-light">otrzymasz informacje o rabatach nawet do 70%</div>
				</div>
				<div className="flex flex-row flex-nowrap">
					<input className="bg-white-primary outline-none border-none rounded-l-md py-2 px-4 self-center" placeholder={'Wpisz swój adres email'} type={'email'}></input>
					<button className="bg-orange-primary text-white-primary py-2 px-4 rounded-r-md self-center hover:bg-orange-secondary">Zapisz się</button>
				</div>
			</div>
		</section>
	)
}
