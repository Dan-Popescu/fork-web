import {API_URL} from "./settings";

export const is_connected = () => {
    fetch(API_URL + "/connect", {
            method: "POST",
            body: JSON.stringify({
                email: window.localStorage.getItem("email"),
                password: window.localStorage.getItem("password")
            })
        }).then(r => r.json())
            .then(r => {
                return r["response"];
            })
}