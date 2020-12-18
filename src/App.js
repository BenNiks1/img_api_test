import React from "react";
import List from "./components/List";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      img: [],
    };
  }

  getImg = () => {
    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          img: result,
        });
      });
  };
  componentDidMount() {
    this.getImg();
  }
  render() {
    return (
      <div className="app">
        <h1>TEST APP</h1>
        <List img={this.state.img} />
      </div>
    );
  }
}

export default App;
