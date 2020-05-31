import React from "react";
import PropTypes from "prop-types";

function Listing({ items }) {
  let res = [];
  let a, title, money, quantityClass;
  for (let i = 0; i < items.length; i++) {
    a = items[i];
    // if (a.title.length > 50) { вызывает ошибку
    if (a.title > 50) {
      title = a.title.slice(0, 50) + "...";
    } else {
      title = a.title;
    }
    if (a.currency_code == "USD") {
      money = `$${a.price} `;
    } else if (a.currency_code == "EUR") {
      money = `€${a.price} `;
    } else {
      money = `${a.price}${a.currency_code}`;
    }
    if (a.quantity <= 10) {
      quantityClass = "low";
    } else if (a.quantity <= 20) {
      quantityClass = "medium";
    } else {
      quantityClass = "high";
    }
    res.push(
      <div key={a.listing_id} className="item">
        <div className="item-image">
          <a href={a.url}>
            <img
              //   src={a.MainImage.url_570xN}
              src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"
              alt=""
            />

            {/* <For each="item" in={a.MainImage}>
              // item.url_570xN //{" "}
            </For> */}
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{money}</p>
          <p className={`item-quantity level-${quantityClass}`}>
            {a.quantity} left
          </p>
        </div>
      </div>
    );
  }
  return <div className="item-list">{res}</div>;
}
Listing.propTypes = {
  count: PropTypes.array.isRequired,
};
export default Listing;
