import { StaticImageData } from "next/image";

export interface RelatedImage {
  img: StaticImageData;
}

export interface ProductDataDT {
  id: number;
  title: string;
  slug: string;
  parent: string;
  children: string;
  image: StaticImageData;
  originalPrice: string;
  price: string;
  discount: number;
  quantity: number;
  type: string;
  tag: string[];
  SKU: string;
  shortDesc: string;
  description: string;
  reviews: number;
  relatedImages: RelatedImage[];
  topRated?: boolean;
  badge?: string;
  bestSelling?: boolean;
  latestProduct?: boolean;
}
