import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartActions } from "./store/cart-slice";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = React.useState("");
  const cartItems = useSelector((state) => state);
  const searchText = (e) => setFilterText(e.target.value);
  const searchTextMethod = (e) => {
    const filteredText = cartItems.cart.items.filter((item) => {
      console.log(item);
      return item.rocket.rocket_name.startsWith(filterText);
    });
    // console.log(filteredText);
    // console.log(filteredText);
  };

  const fetchMoviesHandler = useCallback(async () => {
    const response = await fetch("https://api.spacexdata.com/v3/launches");
    const data = await response.json();
    dispatch(cartActions.addItemToCart(data));
  }, [dispatch]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // console.log(cartItems.cart.items);

  return (
    <React.Fragment>
      <section className="card-item">
        <input
          placeholder="Search here"
          value={filterText}
          onChange={searchText}
        ></input>
        <button onClick={searchTextMethod}>Click Here</button>
        <CartItem></CartItem>
      </section>
    </React.Fragment>
  );
}

export default App;
