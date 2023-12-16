export function Input({ placeholder, RightIcon, onRightIconClick }){
	return(
	<div className="flex flex-nowrap rounded-md bg-white-primary">
		{RightIcon ? <div onClick={onRightIconClick} className="hover:cursor-pointer flex items-center text-orange-primary pl-2">
			<RightIcon className={"w-5 h-5"}/>
      </div> : null}
	  <input type="text" className="block text-black-primary outline-none rounded-md p-2"  placeholder={placeholder}/>
    </div>
	)
}