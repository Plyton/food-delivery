export interface ProductI {
  id: number | string;
  title: string;
  price: number;
  image: string;
  des: string;
  weight: number;
}

export type ProductPropsT = {product: ProductI, variant?: 'default' | 'hero'};
