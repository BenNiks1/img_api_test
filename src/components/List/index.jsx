import React, { useState } from "react";
import ListItem from "./ListItem";

const List = ({ img }) => {
  const [visiblePopup, setVidiblePopup] = useState(false);

  return (
    <ul className="list">
      {img.map(({ url, id }) => {
        return (
          <ListItem
            onClick={() => {
              setVidiblePopup(!visiblePopup);
            }}
            key={id}
            url={url}
            id={id}
          />
        );
      })}

      {visiblePopup && (
        <div className="modal">
          <div
            className="modal__overlay"
            onClick={() => {
              setVidiblePopup(false);
            }}
          ></div>
          <div className="modal__inner">
            <img src="" alt="photo" className="modal__inner-img" />
            <form className="modal__inner-form">
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Ваш комментарий" />
              <button>Оставить комментарий</button>
            </form>
          </div>
        </div>
      )}
    </ul>
  );
};

export default List;
