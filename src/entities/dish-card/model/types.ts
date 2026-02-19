export interface ProductI {
  id: number | string;
  title: string;
  price: string;
  image: string;
  des: string;
  weight: string;
}

export type ProductPropsT = {product: ProductI};
