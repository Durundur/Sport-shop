import Link from "next/link"

export default function NotFound() {
	return (
		<div className='flex flex-col items-center gap-2 py-12'>
			<h2 className='self-center text-[16px] font-medium'>Strona nie została znaleziona</h2>
			<button className='bg-orange-secondary hover:bg-orange-primary transition-colors rounded-md py-2 px-4 text-white-primary'>
				<Link href="/">Przejdź na stronę główną</Link>
			</button>
		</div>
	)
}