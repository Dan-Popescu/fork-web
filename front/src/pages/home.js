import React from "react";
import {button_click__dataLayer, init_page__dataLayer} from "../module/dataLayer";
import {Mouse} from "../component/mouse";
import {Footer} from "../component/footer";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        init_page__dataLayer("HOME");
    }


    render() {
        return (
            <div>
                <Mouse/>
                <div class={"container-home"}>
                    <h1>C2SMR</h1>
                    <h2>Pour une baignade surveillée !</h2>
                    <div class={"btn-download"} onClick={()=> {
                        button_click__dataLayer("download");
                    }}>DOWNLOAD</div>
                </div>
                <div class={"container-safe-beach"}>
                    {/*IMAGE beach*/}
                    {/*IMAGE app*/}
                    {/*IMAGE app*/}
                    {/*IMAGE app*/}
                    <h2>Retrouver toutes les informations en allant à la plage et aider à alerter.</h2>
                </div>
                <div class={"container-types-sensors"}>
                    <div class={"cam"}>
                        {/*IMAGE*/}
                        <h3>Installation manuelle !</h3>
                    </div>
                    <div class={"yt"}>
                        {/*IMAGE*/}
                        <h3>Via une webcam Public !</h3>
                    </div>
                </div>
                <div class={"container-join"}>
                    <h2>Comment le mettre en place ?</h2>
                    <div class={"btn-join"} onClick={()=> {
                        window.location.href = "mailto:victordalet@protonmail.com"
                        button_click__dataLayer("join");
                    }}>Nous contacter</div>
                </div>
                <Footer/>
            </div>
        );
    }
}
