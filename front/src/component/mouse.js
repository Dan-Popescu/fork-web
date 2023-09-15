import React from "react";

export class Mouse extends React.Component {
    constructor(props) {
        super(props);
        window.addEventListener('mousemove', this.mousemove);
    }

    mousemove(event) {
        document.querySelector(".mouse").style.top = event.clientY.toString() + 'px';
        document.querySelector(".mouse").style.left = event.clientX.toString() + 'px';
    }

    render() {
        return(
            <div class={"mouse"}></div>
        )
    }
}