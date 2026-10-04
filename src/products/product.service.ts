import type { Product } from "@/products/product.model";
import type { CreateProductDTO } from "./product.dto";
import { faker } from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO): Product => {
	const at = faker.date.recent();

	const dates = {
		createdAt: at,
		updatedAt: at,
	};

	const newProduct: Product = {
		...data,
		...dates,
		id: faker.string.uuid(),
		category: {
			id: data.categoryId,
			...dates,
			name: faker.commerce.department(),
		},
	};

	products.push(newProduct);

	return newProduct;
};

export const updateProduct = (id: string, changes: Product) => {
	// code
};
