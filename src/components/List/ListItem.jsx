import React from "react";

const ListItem = ({ url, id, onClick }) => {
  return (
    <li className="list__item" onClick={onClick}>
      <img src={url} alt="img" />
    </li>
  );
};

export default ListItem;
