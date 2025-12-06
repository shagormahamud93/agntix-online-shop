"use client";
import { ProductDataDT } from "@/src/types/product-dt";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SingleCartItem: React.FC<ProductDataDT> = ({ id, image, title, price }) => {
  const [value, setValue] = useState<number>(1);

  // handleIncrement
  const handleIncrement = () => {
    setValue((value) => value + 1);
  };

  // handleDecrement
  const handleDecrement = () => {
    if (value > 1) {
      setValue((value) => value - 1);
    }
  };

  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if (!isNaN(num) && num > 0) setValue(num);
  };

  return (
    <tr>
      <td className="product-thumbnail">
        <Link href={`/product-details/${id}`}>
          <Image src={image} alt="cart img" width={125} height={125} />
        </Link>
      </td>

      <td className="product-name">
        <Link href={`/product-details/${id}`}>{title}</Link>
      </td>

      <td className="product-price">
        <span className="amount">${price}</span>
      </td>

      <td className="product-quantity">
        <div className="tp-product-quantity mt-10 mb-10">
          <span className="tp-cart-minus" onClick={handleDecrement}></span>

          <input
            className="tp-cart-input"
            type="text"
            value={value}
            onChange={handleChange}
          />

          <span className="tp-cart-plus" onClick={handleIncrement}></span>
        </div>
      </td>

      <td className="product-subtotal">
        <span className="amount">${price * value as number}</span> 
      </td>

      <td className="product-remove">
        <button type="button">
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default SingleCartItem;
