import { faker } from "@faker-js/faker";
import {
	addProduct,
	products,
	updateProduct,
} from "@/products/product.service";

for (let index = 0; index < 50; index++) {
	addProduct({
		title: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		image: faker.image.url(),
		color: faker.color.human(),
		size: faker.helpers.arrayElement(["M", "S", "XL", "L"]),
		price: parseInt(faker.commerce.price(), 10),
		isNew: faker.datatype.boolean(),
		tags: faker.helpers.arrayElements([
			"new",
			"sale",
			"featured",
			"limited",
			"trending",
		]),
		stock: faker.number.int({ min: 10, max: 100 }),
		categoryId: faker.string.uuid(),
	});
}

console.log(products[0]);

if (products.length > 0) {
	const p = products[0];

	if (p?.id) {
		console.log(
			updateProduct(p.id, {
				...p,
				title: "Lorem ipsum doll",
				stock: 80,
			})
		);
	}
}
