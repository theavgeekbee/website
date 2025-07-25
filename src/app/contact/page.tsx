'use client';

import {delays, IApp2} from "@/tools";
import React from "react";
import ContentText from "@/content_text";
const info = [
    new ContentText("<h1>Contact Me</h1>", false, delays.very_short),
    new ContentText("<h2> → <a href='https://x.com/theavgeekbee' target='_blank'>Twitter/X: @theavgeekbee</a></h2>", false, delays.very_short),
    new ContentText("<h2> → <a href='https://www.instagram.com/theavgeekbee/' target='_blank'>Instagram: @theavgeekbee</a></h2>", false, delays.very_short),
    new ContentText("<h2> → <a href='mailto:me@nwlee.tech'>Email: me@nwlee.tech</a></h2>", false, delays.very_short),
    new ContentText("##navbar##", false, delays.very_short)
];

export default function App() {
    return (<IApp2 texts={info}  starting_text={"user@home: proj\\target\\release$ ./proj --contact"}/>);
}
