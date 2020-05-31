import React from "react";
import "../../App.css";

import data from "../../data/etsy.json";
import Listing from "./Listing";
function List() {
  return <Listing items={data} />;
}
export default List;
