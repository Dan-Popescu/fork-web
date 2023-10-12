import React from "react";
import {init_page__dataLayer} from "../module/dataLayer";
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
                <div class={"container-home"}></div>
                <div class={"container-safe-beach"}></div>
                <div class={"container-types-sensors"}>
                    <div class={"cam"}></div>
                    <div class={"yt"}></div>
                </div>
                <div class={"container-join"}></div>
                <Footer/>
            </div>
        );
    }
}
