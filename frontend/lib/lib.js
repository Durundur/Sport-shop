

const calculateOrderValue = (products) => {
	return products?.reduce((sum, product) => {
		const productPrice = parseFloat(product?.newPrice || product?.price);
		const productQuantity = parseInt(product.quantity);
		const productValue = productPrice * productQuantity;
		return sum + productValue;
	}, 0);
};


export default {
	calculateOrderValue,
}



