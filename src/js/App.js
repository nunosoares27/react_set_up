import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nome: "ReactJS"
    };
  }
  render() {
    return (
      <div>
        <h1>Olá tudo bem? {this.state.nome}</h1>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
