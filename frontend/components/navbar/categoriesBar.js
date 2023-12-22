import { LinkWithUnderline } from "../link/link";


export default function CategoriesBar(){
	return(
		<div className="bg-gray-primary w-full text-black-primary font-medium text-[14px] py-4 shadow"> 
			<div className='flex flex-row flex-wrap gap-x-8 gap-y-2 justify-center md:justify-start max-w-screen-xl mx-auto'>
				<LinkWithUnderline href=''>Obuwie</LinkWithUnderline>
				<LinkWithUnderline href=''>Odzież</LinkWithUnderline>
				<LinkWithUnderline href=''>Fitness i silownia</LinkWithUnderline>
				<LinkWithUnderline href=''>Turystyka</LinkWithUnderline>
				<LinkWithUnderline href=''>Promocje</LinkWithUnderline>
			</div>
		</div>
	)
}