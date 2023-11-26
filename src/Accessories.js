import React, {Component} from "react";
import Beanie from "./Supreme Beanie.jpg";

class Accessories extends Component {
    render() {
        return (
            <div>
                <h2>Accessories for Sale</h2>
                <img alt="Colorful beanie" src={Beanie}/>
                <p>Supreme Hand Tied Beanie</p>
            </div>
        );
    }
}

export default Accessories;