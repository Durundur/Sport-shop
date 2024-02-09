import { LinkWithUnderline } from "../link/link";

export default function Categories({...props}){
	return (
		<div {...props}>
			<LinkWithUnderline href='/products?category=obuwie'>Obuwie</LinkWithUnderline>
			<LinkWithUnderline href='/products?category=odziez'>Odzież</LinkWithUnderline>
			<LinkWithUnderline href='/products?category=fitness'>Fitness i siłownia</LinkWithUnderline>
			<LinkWithUnderline href='/products?category=turystyka'>Turystyka</LinkWithUnderline>
			<LinkWithUnderline href='/products?category=promocje'>Promocje</LinkWithUnderline>
		</div>

	)
}