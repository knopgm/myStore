import React from "react";
import { ProductItem } from "../productitem/ProductItem";
import { Product } from "../../types";

import "./productsList.scss";

type ProductListProps = { products: Product[] };

export const ProductsList = (props: ProductListProps) => {
  props.products;
  return (
    <div className="products-wrapper">
      <ul className="productList_grid">
        {props.products.map((item) => (
          <ProductItem product={item} />
        ))}
      </ul>
    </div>
  );
};
