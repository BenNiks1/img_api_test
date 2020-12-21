import React from "react";

const ListItem = ({ url, id, onClick }) => {
  return (
    <li className="list__item" onClick={onClick}>
      <img src={url} alt="mainPhoto" id={id} />
    </li>
  );
};

export default ListItem;
