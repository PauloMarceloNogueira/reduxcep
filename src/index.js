import React from "react";
import ReactDOM from "react-dom";
import './index.sass';

// Components
import Header from './Components/Header/Header.jsx';
import Map from './Components/Map/Map.jsx';

const Index = () => 
(
  <div className="content">
    <h3>Consulta de endereço</h3>
    <Header />
    <Map />
  </div>
);

ReactDOM.render(<Index />, document.getElementById("index"));