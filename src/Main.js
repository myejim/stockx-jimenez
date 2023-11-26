import React, {Component} from "react";
import {
    Route, Routes, 
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Sneakers from "./Sneakers";
import Accessories from "./Accessories";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>StockX</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/sneakers">Sneakers</NavLink></li>
                        <li><NavLink to="/accessories">Accessories</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/sneakers" element={<Sneakers />}/>
                            <Route path="/accessories" element={<Accessories />}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;