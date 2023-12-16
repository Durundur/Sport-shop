import Link from 'next/link';

export function LinkWithUnderline({...props}){
	return(
		<Link {...props} className='underline decoration-transparent hover:decoration-gray-300 hover:decoration-1 hover:underline-offset-4 hover:ease-in-out hover:duration-300'>
			{props.children}
		</Link>
	)
}