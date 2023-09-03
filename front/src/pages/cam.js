import React from "react";

export class Cam extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name,
            path_picture: "https://inspiranium.fr/cdn/54.png"
        }
    }

    render() {
        return(
            <div>

            </div>
        );
    }

}