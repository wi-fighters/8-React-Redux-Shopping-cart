import React, { Component } from "react";
import "./App.css";

import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Component-container">
                    <ProductList />
                    <hr />
                    <ShoppingCart />
                </div>
            </div>
        );
    }
}

export default App;
