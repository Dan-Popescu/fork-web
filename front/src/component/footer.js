import React from "react";
import {button_click__dataLayer} from "../module/dataLayer";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h2>A bientôt!</h2>
                <img
                    src={"https://media.discordapp.net/attachments/1084071570567335956/1162073344435302461/iu.png?ex=653a9c23&is=65282723&hm=07da00846db268a1af9f94ac1730846bfac5e5fb6dfaa06dac3d1cc013ef800b"}
                    alt={"google play store"}
                    onClick={() => {
                        button_click__dataLayer("google play store");
                        document.location.href = ""; //to completed
                    }}/>
            </footer>
        );
    }
}
