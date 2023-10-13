import React from "react";
import {button_click__dataLayer, init_page__dataLayer} from "../module/dataLayer";
import {Mouse} from "../component/mouse";
import {Footer} from "../component/footer";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        init_page__dataLayer("HOME");
        setTimeout(()=> {
            this.animation_scroll();
        }, 200);
    }

    animation_scroll() {
        const nb_slide_total = 5
        let sliding_list = [];
        for (let nb_slide = 1 ; nb_slide <= nb_slide_total ; nb_slide++) {
            sliding_list.push(document.querySelector('.slide'+nb_slide.toString()));
        }
        const multiplicative = 0.6;
        window.addEventListener('scroll',()=>{
            const {scrollTop,clientHeight} = document.documentElement;
            let topElementToTopViewport = [];
            for (let nb_slide = 0 ; nb_slide < nb_slide_total ; nb_slide++) {
                topElementToTopViewport.push(sliding_list[nb_slide].getBoundingClientRect().top);
            }

            for (let nb_slide = 0 ; nb_slide < nb_slide_total ; nb_slide++) {
                if(scrollTop > (scrollTop+topElementToTopViewport[nb_slide]).toFixed()-clientHeight*multiplicative){
                    sliding_list[nb_slide].classList.add('active'+(nb_slide+1).toString());
                }
            }

        })
    }


    render() {
        return (
            <div>
                <Mouse/>
                <div class={"container-home"}>
                    <h1>C2SMR</h1>
                    <h2>Pour une baignade surveillée !</h2>
                    <div class={"btn-download"} onClick={() => {
                        button_click__dataLayer("download");
                    }}>DOWNLOAD
                    </div>
                    <div class={"wrapper-img a"}>
                        <img alt={"img-round-pres"}
                             src={"https://media.discordapp.net/attachments/1084071570567335956/1162305243846029404/image.png?ex=653b741c&is=6528ff1c&hm=24addab4efaf096a3e58f0f711ba635368792dac576a7d4b80210921ad1f7695&=&width=1000&height=521"}/>
                    </div>
                    <div className={"wrapper-img b"}>
                        <img alt={"img-round-pres"}
                             src={"https://media.discordapp.net/attachments/1084071570567335956/1162305243846029404/image.png?ex=653b741c&is=6528ff1c&hm=24addab4efaf096a3e58f0f711ba635368792dac576a7d4b80210921ad1f7695&=&width=1000&height=521"}/>
                    </div>
                    <div className={"wrapper-img c"}>
                        <img alt={"img-round-pres"}
                             src={"https://media.discordapp.net/attachments/1084071570567335956/1162305243846029404/image.png?ex=653b741c&is=6528ff1c&hm=24addab4efaf096a3e58f0f711ba635368792dac576a7d4b80210921ad1f7695&=&width=1000&height=521"}/>
                    </div>
                </div>
                <div class={"container-safe-beach"}>
                    <div className={"wrapper"}>
                        <h2>Retrouver toutes les informations en allant à la plage et aider à alerter.</h2>
                        <div className={"btn-download"} onClick={() => {
                            button_click__dataLayer("download_page_2");
                        }}>DOWNLOAD
                        </div>
                    </div>
                    <img alt={"img app-pres 1"} class={"slide1"}
                         src={"https://media.discordapp.net/attachments/1154119850210369586/1154120015705014453/image.png?ex=65395c86&is=6526e786&hm=946ae7de9d7f2518649fc16ab7cfa94993fddc6e852bae91f78c8ea767cf37c7&"}/>
                </div>
                <div class={"container-types-sensors"}>
                    <div class={"cam"}>
                        <img alt={"camera"}
                             class={"slide5"}
                             src={"https://media.discordapp.net/attachments/1084071570567335956/1162300945821085716/d8218.png?ex=653b701b&is=6528fb1b&hm=981f90f867afbc221e10e24b7be71c8a5c8162237a31f5dd0cd0fca9b079e7d4&=&width=578&height=578"}/>
                        <h3>Installation manuelle !</h3>
                    </div>
                    <div class={"yt"}>
                        <img alt={"yt"} class={"slide2"}
                             src={"https://media.discordapp.net/attachments/1084071570567335956/1162301584600993812/image.png?ex=653b70b4&is=6528fbb4&hm=71a35be1a4f23727df04970b4e48fcfa3eb9f27484d714ed500e017179cc101b&=&width=883&height=578"}/>
                        <h3>Via une webcam Public !</h3>
                    </div>
                </div>
                <div class={"container-join"}>
                    <h2 class={"slide3"}>Comment le mettre en place ?</h2>
                    <div class={"btn-join slide4"} onClick={() => {
                        window.location.href = "mailto:victordalet@protonmail.com"
                        button_click__dataLayer("join");
                    }}>Nous contacter
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
