import React, { useState, useCallback } from "react";
import axios from "axios";

const CommentForm = ({ id }) => {
  const [state, setState] = useState({ name: "", text: "" });
  const hundleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios.post(
        `https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,
        { comment:{text:state.text}, name:state.name }
      );
    },
    [id, state]
  );
  return (
    <form
      // method="POST"
      onSubmit={hundleSubmit}
      className="modal__inner-form"
    >
      <input
        type="text"
        placeholder="Ваше имя"
        value={state.name}
        onChange={(evt) =>
          setState({
            ...state,
            name: evt.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Ваш комментарий"
        value={state.text}
        onChange={(evt) =>
          setState({
            ...state,
            text: evt.target.value,
          })
        }
      />
      <button>Оставить комментарий</button>
    </form>
  );
};

export default CommentForm;
