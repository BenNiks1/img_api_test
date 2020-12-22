import React, { useState } from "react";
import ListItem from "./ListItem";
import Modal from "../Modal";

const List = ({ img }) => {
  const [visiblePopup, setVidiblePopup] = useState(false);
  const [modalPhoto, setModalPhoto] = useState([]);

  const getPhoto = (id) => {
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setModalPhoto(result);
      });
  };

  return (
    <ul className="list">
      {img.map(({ url, id }) => {
        return (
          <ListItem
            onClick={() => {
              setVidiblePopup(!visiblePopup);
              getPhoto(id);
            }}
            key={id}
            url={url}
            id={id}
          />
        );
      })}

      {visiblePopup && (
        <Modal modalPhoto={modalPhoto} setVidiblePopup={setVidiblePopup} />
      )}
    </ul>
  );
};

export default List;
