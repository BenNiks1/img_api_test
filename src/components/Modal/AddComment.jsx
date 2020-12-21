import React from "react";
import axios from "axios";

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      commentText: "",
    };
  }

  postComment = async () => {
    const res = await axios.post(
      `https://boiling-refuge-66454.herokuapp.com/images/${this.props.id}/comments`,
      {
        comment: this.state.comment,
        name: this.state.name,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  render() {
    return (
      <form method="POST" className="modal__inner-form">
        <input type="text" placeholder="Ваше имя" value={this.state.name}/>
        <input type="text" placeholder="Ваш комментарий" value={this.state.commentText}/>
        <button onClick={this.postComment}>Оставить комментарий</button>
      </form>
    );
  }
}

export default AddComment;
