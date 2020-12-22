import React, { useEffect, useState } from "react";
import List from "./components/List";

const App = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setImg(result);
      });
  }, []);
  return (
    <div className="app">
      <h1>TEST APP</h1>
      <List img={img} />
    </div>
  );
};

export default App;
