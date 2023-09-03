import React from "react";
export class Home extends React.Component {

    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name,
            number_red_alert: 0,
            number_orange_alert: 0,
            number_green_alert: 0,
            number_person_detected_on_beach: 0,
            number_person_detection_on_sea: 0,
            data_person_per_hour_on_beach: [20, 10, 2, 10, 40, 10, 20, 1, 0],
            data_person_per_hour_on_sea: [10, 2, 2, 1, 6, 20, 10, 1, 0],
            visibility_sea: [40, 60, 30, 100, 80, 20, 10, 0, 30],
            weather_temperature_sea: [10, 2, 2, 1, 6, 20, 10, 1, 0],
            weather_temperature_beach: [40, 60, 30, 100, 80, 20, 10, 0, 30],
            weather_swell: [0.3, 2, 2, 1, 6, 0.5, 2, 1, 0],
            weather_wind: [30, 20, 20, 10, 60, 45, 20, 10, 40],
            weather_visibility: [.3, .2, .2, .1, .6, .45, .2, .1, .4]
        };

        this.data_person_per_hour = {
            labels: ["-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "mtn"],
            datasets: [
                {
                    data: this.state.data_person_per_hour_on_sea,
                    strokeWidth: 2
                },
                {
                    data: this.state.data_person_per_hour_on_beach,
                    color: (opacity = 1) => `rgba(255, 231, 160, ${opacity})`,
                    strokeWidth: 2
                }
            ],
            legend: ["Mer", "Plage"]
        }

        this.data_visibility_sea = {
            labels: ["-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "mtn"],
            datasets: [
                {
                    data: this.state.visibility_sea,
                    strokeWidth: 2
                }
            ],
            legend: ["en %"]
        }

        this.data_weather_temperature = {
            labels: ["-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "mtn"],
            datasets: [
                {
                    data: this.state.weather_temperature_sea,
                    strokeWidth: 2
                },
                {
                    data: this.state.weather_temperature_beach,
                    color: (opacity = 1) => `rgba(255, 231, 160, ${opacity})`,
                    strokeWidth: 2
                }
            ],
            legend: ["°C eau", " °C air"]
        }

        this.data_weather_swell = {
            labels: ["-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "mtn"],
            datasets: [
                {
                    data: this.state.weather_swell,
                    strokeWidth: 2
                }
            ],
            legend: ["Houle (en mètres)"]
        }

        this.data_weather_wind = {
            labels: ["-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "mtn"],
            datasets: [
                {
                    data: this.state.weather_wind,
                    strokeWidth: 2
                }
            ],
            legend: ["Vent (en nœuds)"]
        }

        this.data_weather_visibility = {
            labels: ["-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "mtn"],
            datasets: [
                {
                    data: this.state.weather_visibility,
                    strokeWidth: 2
                }
            ],
            legend: ["Visibilité (en mille)"]
        }

    }

    render() {
        return(
          <div></div>
        );
    }

}