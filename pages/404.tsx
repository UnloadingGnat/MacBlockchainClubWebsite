import {useEffect} from "react";

export default function Redirect404() {
    useEffect(() => {
        window.location.replace("/");
    });

    return null;
}
