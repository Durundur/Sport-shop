export const dynamic = 'force-dynamic'

export async function getProducts() {
	const response = await fetch(`${process.env.API_URL}/api/products`);
	return await response.json()
}