import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
function CartItem() {
  const cartItems = useSelector((state) => state);
  //   console.log(cartItems.cart.items);

  return (
    <React.Fragment>
      <section className="card-item">
        {cartItems.cart.items.length
          ? cartItems.cart.items.map((item, i) => (
              <div class="row" key={item.flight_number + i}>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text">Mission Name -{item.mission_name}</p>
                      <p class="card-text">
                        Rocket Name -{item.rocket.rocket_name}
                      </p>
                      <p class="card-text">
                        Rocket Type -{item.rocket.rocket_type}
                      </p>
                      <p class="card-text">
                        Flight Number -{item.launch_site.site_name}
                      </p>
                      <p class="card-text">
                        Flight Number -{item.flight_number}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "...Loading"}
      </section>
    </React.Fragment>
  );
}

export default CartItem;
