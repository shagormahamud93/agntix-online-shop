
import { ProductCategory } from "@/src/types/category-dt";
import Image from "next/image";
import Link from "next/link";

interface SingleCategoryProps {
  item: ProductCategory;
}

const SingleCategory: React.FC<SingleCategoryProps> = ({ item }) => {
  return (
    <div className="product__category-item mb-20 text-center">
      <div className="product__category-thumb w-img">
        <Link href="/shop">
          <Image
            width={270}
            height={180}
            src={item.img}
            alt="image"
          />
        </Link>
      </div>
      <div className="product__category-content">
        <h3 className="product__category-title">
          <Link href="/shop">{item.title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleCategory;

