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
  const cartImage = require("../../img/orange_cart.png");

  return (
    <>
      <div className="product_item-wrapper" id={`${id}`}>
        <div className="img_frame">
          <img
            alt="product image"
            style={{ width: 100 }}
            src={String(productImage)}
          />
        </div>
        <h2>{title}</h2>
        <p>
          {currency} {value}
        </p>
        <div className="add_remove_cart-wrapper">
          <button className="button-add_remove">-</button>
          <img
            alt="cart image"
            style={{ width: 40, padding: 3 }}
            src={String(cartImage)}
          />
          <button className="button-add_remove">+</button>
        </div>
      </div>
    </>
  );
};
