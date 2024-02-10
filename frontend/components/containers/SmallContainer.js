export default function SmallContainer({children}) {
	return (
		<div className='min-h-[50vh] flex justify-center items-center'>
			{children}
		</div>
	)
}