import React, {Component} from "react";
import Jordan from "./OG Jordan.png";

class Sneakers extends Component {
    render() {
        return (
            <div>
                <h2>Sneakers for sale</h2>
                <img alt="OG Retro Jordan" src={Jordan}/>
                <p>OG Retro Jordans</p>
            </div>
        );
    }
}

export default Sneakers;