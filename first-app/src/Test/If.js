import React from "react";
import Home from "./Home"
import About from "./About";
function IF() {
    let content;
    if (1 + 1 === 3) {
        content = <Home />
    } else {
        content = <About/>
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default IF