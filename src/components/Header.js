import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <h1>Khadija's Media Store</h1>
        <div className="breadcrumb">
          <Link to="/"> Home </Link> |<Link to="/about"> About </Link> |
          <Link to="/basket" className="basket">
            {" "}
            Basket
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

// Bookcase ({props.bookLength})
