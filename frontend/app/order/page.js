'use client'
import { useCart } from "@/lib/context/CartContex";
import { CartListItem } from "@/components/cartListItem/cartListItem";
import lib from "@/lib/lib";
import Link from "next/link";
import Input from "@/components/forms/input";
import { handleInputChange } from "@/lib/formHelpers";
import { useState } from "react";
import { fetchWrapper } from "@/lib/fetchWrapper";
import { useRouter } from 'next/navigation';


export default function Order() {
	const { cart, clearCart } = useCart();
	const router = useRouter()
	const isCartEmpty = !(Array.isArray(cart?.products) && cart?.products.length > 0);
	const [orderData, setOrderData] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		street: '',
		buildingNo: '',
		postCode: '',
		city: '',
		paymentMethod: 'Przelew',
	});

	async function createOrder(event) {
		event.preventDefault();
		try {
			const newOrderData = { ...orderData, products: cart.products };
			const response = await fetchWrapper.post('/api/orders', newOrderData);
			clearCart();
			router.push('/');
		} catch (e) {
			console.log(e);
		}

	}

	return (
		<main className="max-w-screen-xl mx-auto">
			<div className='flex flex-col gap-4 py-4'>
				{
					isCartEmpty ?
						<div className="flex flex-col justify-center items-center gap-4 p-8">
							<h1 className="text-[18px] font-medium">Twój koszyk jest pusty!</h1>
							<Link href={'/'}>
								<button className="bg-orange-primary hover:bg-orange-secondary py-2 px-4 rounded-md text-white-primary">Wróć do zakupów</button>
							</Link>
						</div> :
						<form onSubmit={(e) => { createOrder(e) }}>
							<div className="flex flex-row flex-wrap justify-evenly">
								<div className="flex flex-col gap-1">
									<h1 className="text-[18px] font-medium py-4">Dane kontaktowe</h1>
									<label htmlFor="firstName">Imię</label>
									<Input onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.firstName} required={true} name={"firstName"} id={"firstName"} type={'text'}></Input>
									<label htmlFor="lastName">Nazwisko</label>
									<Input onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.lastName} required={true} name={"lastName"} id={"lastName"} type={'text'}></Input>
									<label htmlFor="phoneNumber">Numer telefonu</label>
									<Input onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.phoneNumber} required={true} name={"phoneNumber"} id={"phoneNumber"} type={'text'}></Input>
								</div>

								<div className="flex flex-col gap-1">
									<h1 className="text-[18px] font-medium py-4">Adres dostwy</h1>
									<label htmlFor="street">Ulica</label>
									<Input onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.street} required={true} name={"street"} id={"street"} type={'text'}></Input>
									<label htmlFor="buildingNo">Numer mieszkania</label>
									<Input onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.buildingNo} required={true} name={"buildingNo"} id={"buildingNo"} type={'text'}></Input>
									<label htmlFor="postCode">Kod pocztowy</label>
									<Input onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.postCode} required={true} name={"postCode"} id={"postCode"} type={'text'}></Input>
									<label htmlFor="city">Miasto</label>
									<Input onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.city} required={true} name={"city"} id={"city"} type={'text'}></Input>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<label htmlFor="paymentMethod">Forma płatnosci</label>
								<select onChange={(e) => handleInputChange(e, setOrderData)} value={orderData.paymentMethod} className="border-gray-200 border-[1px] rounded-md p-2 focus:shadow-[0_0_3px_rgba(0,0,0,.3)] transition-shadow duration-[100ms] outline-none" name="paymentMethod" id="paymentMethod">
									<option>Przelew</option>
									<option>Za pobraniem</option>
								</select>
							</div>


							{cart?.products.map((product) => <CartListItem product={product} />)}

							<div className="flex flex-col items-end gap-6 py-4">
								<div className="flex flex-row justify-center items-center gap-6">
									<span className="text-lg">Wartość koszyka</span>
									<span className="text-orange-primary font-medium text-3xl">{lib.calculateOrderValue(cart?.products)} zł</span>
								</div>
								<button type="submit" className="bg-green-600 hover:bg-green-700 rounded-md text-white-primary py-4 px-8">Złóż zamówienie</button>
							</div>
						</form>
				}
			</div>
		</main>
	)
}