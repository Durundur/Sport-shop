import Categories from "../categories/categories"

export default function CategoriesBar(){
	return(
		<div className="bg-gray-secondary w-full text-black-primary font-medium text-[14px] py-2 shadow"> 
			<div className='max-w-screen-xl mx-auto'>
				<Categories className='flex flex-row flex-wrap gap-x-8 gap-y-2 justify-center md:justify-start' />
			</div>
		</div>
	)
}