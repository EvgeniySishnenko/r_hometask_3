import React from "react";
import PropTypes from "prop-types";

import Star from "./Star";

function Stars({ count = 0 }) {
  // const { count } = props;

  let res = [];
  if (typeof count == "number" && count > 0 && count <= 5) {
    for (let i = 0; i < count; i++) {
      res.push(<Star key={i} />);
    }
  } else {
    res.push(<li>Что то пошло не так</li>);
  }
  return <ul className="card-body-stars u-clearfix">{res}</ul>;
}
Stars.propTypes = {
  count: PropTypes.number.isRequired,
};
export default Stars;
