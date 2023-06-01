import React from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import { Product } from "../../../../types";

import "./ProductList.scss";

type ProductListProps = { products: Product[] };

export const ProductList = (props: ProductListProps) => {
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
