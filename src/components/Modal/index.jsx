import React from "react";
import AddComment from "./AddComment";
import moment from "moment";

const Modal = ({ modalPhoto, setVidiblePopup }) => {
  return (
    <div className="modal">
      <div
        className="modal__overlay"
        onClick={() => {
          setVidiblePopup(false);
        }}
      ></div>
      <div className="modal__inner">
        <img
          src={modalPhoto.url}
          alt="modalPhoto"
          className="modal__inner-img"
        />
        <AddComment id={modalPhoto.id}/>
        <ul className="modal__comments">
          {modalPhoto.comments
            ? modalPhoto.comments.map((comment) => (
                <li key={comment.id}>
                  <p>{moment(comment.date).format("DD.MM.YYYY")}</p>
                  <p>{comment.text}</p>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
