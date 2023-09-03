import React from "react";

export class Alert extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name,
            num_image_to_display: 0,
            lst_alert: [
                ["red", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["red", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/50.png"],
                ["red", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["red", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["orange", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["orange", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["green", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["green", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["green", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["green", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"],
                ["green", "Neglegentur theophrastus neglegentur molestie euripidis invidunt.", "https://inspiranium.fr/cdn/54.png"]
            ]
        };
    }

    render() {
        return (
            <div>

            </div>
        );
    }

}