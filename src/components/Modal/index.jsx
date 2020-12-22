import React from "react";
import AddComment from "./CommentForm";
import dayjs from "dayjs";

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
                  <time className='modal__comments-date'>{dayjs(comment.date).format("DD.MM.YYYY")}</time>
                  <p className='modal__comments-text'>{comment.text}</p>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
