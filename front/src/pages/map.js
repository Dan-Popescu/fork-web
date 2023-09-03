import React from "react";

export class Map extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name,
            init_position: {
                latitude: 48.994119156081254,
                longitude: 2.2246659661397366,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            pointer_position: [[48.994119156081254, 2.2246659661397366, "Franconville", 20]]
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }

}
