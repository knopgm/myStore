import React from "react";
import { Product } from "../../types";
import "./productItem.scss";

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const { id, title, price } = product;
  const { value, currency } = price;
  const productImage = require("../../img/shoe2.png");

  return (
    <>
      <div className="product_item-wrapper" id={`${id}`}>
        <div>
          <img
            alt="product image"
            style={{ width: 100 }}
            src={String(productImage)}
          />
        </div>
        <div>{title}</div>
        <div>
          {currency} {value}
        </div>
      </div>
    </>
  );
};
