import { LinkWithUnderline } from "../link/link"

export default function Footer() {
	return (
		<section className="bg-black-primary text-white-primary w-full py-6">
			<div className="flex w-full items-start flex-wrap md:justify-start max-w-screen-xl mx-auto">
				<div className={'basis-full md:basis-1/2 lg:basis-1/5 text-center lg:text-left'}>
					<div className={"text-lg py-4"}>Przed zakupami</div>
					<div className='flex flex-col gap-y-2'>
						<span><LinkWithUnderline href={''}>Koszty dostawy</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Odbiór przesyłki</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Sposoby płatności</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Dostępność towarów</LinkWithUnderline></span>
					</div>
				</div>
				<div className="basis-full md:basis-1/2 lg:basis-1/5 text-center lg:text-left">
					<div className={"text-lg py-4"}>Po zakupach</div>
					<div className='flex flex-col gap-y-2'>
						<span><LinkWithUnderline href={''}>Stan zamówienia</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Reklamacje</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Zwrot towaru</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Blog</LinkWithUnderline></span>
					</div>
				</div>

				<div className="basis-full md:basis-1/2 lg:basis-1/5 text-center lg:text-left">
					<div className={"text-lg py-4"}>Moje konto</div>
					<div className='flex flex-col gap-y-2'>
						<span><LinkWithUnderline href={''}>Logowanie</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Mój schowek</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Ustawienia konta</LinkWithUnderline></span>
					</div>
				</div>

				<div className={'basis-full md:basis-1/2 lg:basis-1/5 text-center lg:text-left'}>
					<div className={"text-lg py-4"}>O sklepie</div>
					<div className='flex flex-col gap-y-2'>
						<span><LinkWithUnderline href={''}>O nas</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Regulamin</LinkWithUnderline></span>
						<span><LinkWithUnderline href={''}>Kontakt</LinkWithUnderline></span>
					</div>
				</div>

				<div className="basis-full lg:basis-1/5 text-center lg:text-left">
					<div className={"text-lg py-4"}>Kontakt</div>
					<div className='flex flex-col gap-y-2'>
						<span>Infolinia: 801 000 304</span>
						<span>Dla komórek: 327 007 440</span>
						<span>Email: sklep@sport-shop.pl</span>
					</div>
				</div>
			</div>
			<div className='flex justify-center pt-8'><span> Copyright &copy; 2023 sport-shop.pl</span></div>
		</section>
	)
}
