'use client';

import {delays, IApp2} from "@/tools";
import React from "react";
import ContentText from "@/content_text";
const info = [
    new ContentText("<h1>My projects</h1>", false, delays.very_short),
    new ContentText("<h2> → TRACON Simulator</h2>", false, delays.very_short),
    new ContentText("TRACON Simulator is a project which simulates a real life air traffic controller's terminal.<br />", false, delays.very_short),
    new ContentText("##photo:/ts-1.png:TRACON Simulator image:799:431:", false, delays.very_short),
    new ContentText("ts-1.png 1.9kB ", false, delays.short),
    new ContentText("##link:extern:github.com/theavgeekbee/tracon-simulator:Github:", false, delays.very_short),
    new ContentText("<h2> → SimpleNet</h2>", false, delays.very_short),
    new ContentText("SimpleNet is a Java networking library I made. Deprecated by HttpClient in Java 11, but you can still look at the code. ", false, delays.very_short),
    new ContentText("##link:extern:github.com/theavgeekbee/SimpleNet:Github:", false, delays.very_short),
    new ContentText("<h2> → More to come later!</h2>", false, delays.very_short),
    new ContentText("#navbar#", false, delays.very_short),
];

export default function App() {
    return (<IApp2 texts={info}  starting_text={"user@home: proj\\target\\release$ ./proj --projects"}/>);
}