import React from "react";
import { Container } from "../container/Container";

import "./topbar.scss";

export const Topbar = () => {
  const cartImage = require("../../img/orange_cart.png");
  const logoImage = require("../../img/mystore-logo-large.png");
  const searchIcon = require("../../img/search_large.png");

  return (
    <div className="topbar-wrapper">
      <Container>
        <div className="topbar">
          <div>
            <img
              alt="logo image"
              style={{ width: 70 }}
              src={String(logoImage)}
            />
          </div>
          <div className="search_cart">
            <div>
              <img
                alt="search icon"
                style={{ width: 40 }}
                src={String(searchIcon)}
              />
            </div>
            <div>
              <img
                alt="cart image"
                style={{ width: 40, padding: 3 }}
                src={String(cartImage)}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
