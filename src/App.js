import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Map from "./components/map";
import Legend from "./components/legend";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Map />
        <Legend />
        <Footer />
      </div>
    );
  }
}

export default App;
