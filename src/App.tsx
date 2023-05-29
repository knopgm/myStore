import React from "react";
import { Container } from "./components/container/Container";
import { Topbar } from "./components/topbar/Topbar";
import { Footbar } from "./components/footbar/Footbar";

import "./styles.scss";

export function App() {
  return (
    <Container>
      <Topbar />
      <h1>Products</h1>
      <Footbar />
    </Container>
  );
}
