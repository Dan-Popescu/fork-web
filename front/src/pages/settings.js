import React from "react";

export class Settings extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name,
            name_of_the_city : "Franconvillle"
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }

}