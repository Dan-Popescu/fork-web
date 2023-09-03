import React from "react";

export class Connect extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.set_name = set_name;
        this.url_picture = "https://inspiranium.fr/cdn/174.png";
        this.state = {
            email : "",
            password :""
        }
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}