export const dynamic = 'force-dynamic'

export async function getOrders() {
	const response = await fetch(`${process.env.API_URL}/api/products`);
	return await response.json()
}