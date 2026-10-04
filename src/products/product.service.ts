import type { Product } from "@/products/product.model";
import type { CreateProductDTO, UpdateProductDTO } from "./product.dto";
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

export const updateProduct = (
	id: string,
	changes: UpdateProductDTO
): Product => {
	const index = products.findIndex((p) => p.id === id);
	if (index === -1) {
		throw new Error("Invalid id");
	}

	const product: Product = { ...products[index] };

	const updatedProduct: Product = {
		...product,
		...changes,
	};

	products[index] = { ...updatedProduct };

	return updatedProduct;
};
