

export default function Input({placeholder, type, name, id, ...props}){
	return(
		<input {...props} type={type} name={name} id={id} className='border-gray-200 border-[1px] rounded-md p-2 focus:shadow-[0_0_3px_rgba(0,0,0,.3)] transition-shadow duration-[400ms] outline-none' placeholder={placeholder}></input>
	)
}
