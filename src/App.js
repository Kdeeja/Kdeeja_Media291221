import { useState } from "react";
import "./styles.css/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import musiclist from "./models/data.json";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState(musiclist);
  const [basket, setBasket] = useState([]);

  // const addToBasket = (id) => {
  //   setBasket(basket.concat(products.filter((book) => product.id === id)));
  //   setProducts([
  //     ...products.map((product) => {
  //       if (product.id === id) {
  //         product.read = true;
  //       }
  //       return product;
  //     })
  //   ]);
  // };

  return (
    <BrowserRouter>
      <div className="route-container">
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <h2>Welcome to Khadija's media store</h2>
              <ProductList products={products} />
            </>
          )}
        />
        <Route
          exact
          path="/basket"
          render={() => (
            <>
              <Header />
              <h2>Your Basket</h2>
              <ProductList products={products} />
            </>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <>
              <Header />
              <h2>About Us</h2>
              <ProductList products={products} />
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
}
export default App;

//in App.js I am displaying ProductList and passing all of my products to ProducList.
//may need to change the component being rendered for the 'about' and 'basket' pages - at the moment it's productlist but should it be basket?
