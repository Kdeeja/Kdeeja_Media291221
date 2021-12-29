//purpose of the productlist is to display a list of multimedia
import React from "react";
// import PropTypes from "prop-types"; //prop types is above internal components e.g Product, as we import from third party dependencies beforre internal.
// import musiclist from "./models/data.json";
import Product from "./Product";

//if I want to sort products by price or a-z, then needs to be done in ProductList.

const ProductList = (props) => {
  return props.products.map((product) => (
    <Product
      key={product.trackId}
      kind={product.kind}
      id={product.trackId}
      artistName={product.artistName}
      name={product.trackName}
      thumbnail={product.artworkUrl100}
      price={product.trackPrice}
      longDescription={product.longDescription}
    />
  ));
};

// ProductList.propTypes = {
//   products: Proptype.shape({
//       kind:
//   }

//   )
// }

export default ProductList;

//I am looping through my list of books and displaying each book's  kind, id, artist name, song name, image and price.
//Whenever you do a loop to display a React component, you have to add a key property to that component and that key property has to be a unique identifier (have used the track id as they are all different)
