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

  handleSubmit = (e) => {
    e.preventDefault();

    const comment = {
      name: this.state.name,
      commentText: this.state.commentText,
    };

    axios.post(
      `https://boiling-refuge-66454.herokuapp.com/images/${this.props.id}/comments`,
      { comment }
    );
  };

  render() {
    return (
      <form
        // method="POST"
        onSubmit={this.handleSubmit}
        className="modal__inner-form"
      >
        <input
          type="text"
          placeholder="Ваше имя"
          value={this.state.name}
          onChange={(evt) =>
            this.setState({
              name: evt.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Ваш комментарий"
          value={this.state.commentText}
          onChange={(evt) =>
            this.setState({
              commentText: evt.target.value,
            })
          }
        />
        <button>Оставить комментарий</button>
      </form>
    );
  }
}

export default AddComment;
