import logo from './logo.svg';
import Image from 'next/image';

export function Logo(){
	return(
		<Image src={logo} alt={'logo'}></Image>
	)
}