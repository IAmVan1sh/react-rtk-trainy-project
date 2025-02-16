interface IProduct {
    _id: string,
    title: string,
    description: string,
    price: number,
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[],
}

export interface ICreateProduct extends Omit<IProduct, "_id"> {}

export default IProduct;