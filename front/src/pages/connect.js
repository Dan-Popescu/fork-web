import React from "react";
import {API_URL} from "../module/settings";

export class Connect extends React.Component {

    test_connection() {
        fetch(API_URL + "/connect", {
            method: "POST",
            body: JSON.stringify({
                email: document.querySelector(".input-email").value,
                password: document.querySelector(".input-password").value
            })
        }).then(r => r.json())
            .then(r => {
                if (r["response"] === true) {
                    window.localStorage.setItem("email",document.querySelector(".input-email").value);
                    window.localStorage.setItem("password",document.querySelector(".input-password").value);
                    document.location.href = "/app/home";
                }
            })
    }

    render() {
        return(
            <div class={"container-connection-page"}>
                <div class={"container-connection-form"}>
                    <input class={"input-email"} placeholder={"Email"}/>
                    <input class={"input-password"} placeholder={"Password"} type={"password"}/>
                    <input onClick={()=>this.test_connection()} class={"btn-connection"} value={"Connection"} type={"button"}/>
                </div>
            </div>
        );
    }
}