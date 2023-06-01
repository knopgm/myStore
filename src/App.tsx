import React, { useState } from "react";
import { Container } from "./components/container/Container";
import { Topbar } from "./components/Topbar/Topbar";
import { Footer } from "./components/Footer/Footer";
import { ProductList } from "./pages/home/components/Productlist/ProductList";
import { Product } from "./types";
import "./styles.scss";

export function App() {
  const [products] = useState<Product[]>([
    { id: 1, price: { value: 10, currency: "EUR" }, title: "Shoe 1" },
    { id: 2, price: { value: 20, currency: "EUR" }, title: "Shoe 2" },
    { id: 3, price: { value: 30, currency: "EUR" }, title: "Shoe 3" },
    { id: 4, price: { value: 40, currency: "EUR" }, title: "Shoe 4" },
    { id: 5, price: { value: 50, currency: "EUR" }, title: "Shoe 5" },
  ]);

  return (
    <>
      <Topbar />
      <Container>
        <h1>Products</h1>
        <ProductList products={products} />
      </Container>
      <Footer />
    </>
  );
}
