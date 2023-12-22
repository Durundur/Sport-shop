export const dynamic = 'force-dynamic'

export async function getNewestProducts() {
	const response = await fetch(`${process.env.API_URL}/api/products`);
	return await response.json()
}

export async function getRecommendedProducts() {
	const response = await fetch(`${process.env.API_URL}/api/products`);
	return await response.json()
}