'use client';

import {delays, IApp2} from "@/tools";
import React from "react";
import ContentText from "@/content_text";
const info = [
    new ContentText("<h1>My projects</h1>", false, delays.very_short),
    new ContentText("<h2> → SimpleGrade</h2>", false, delays.very_short),
    new ContentText("SimpleGrade is a wrapper application for Home Access Center, which my school uses to store grades.<br />", false, delays.very_short),
    new ContentText("##photo:/SimpleGrade.png:SimpleGrade screenshot:799:431:", false, delays.very_short),
    new ContentText("SimpleGrade.png 31.98kB ", false, delays.short),
    new ContentText("##link:extern:github.com/theavgeekbee/simplegrade:Github:", false, delays.very_short),
    new ContentText("<hr />", false, delays.very_short),
    new ContentText("<h2> → SigmaTerminal + FFS Markets</h2>", false, delays.very_short),
    new ContentText("I made a futures market simulator called FFS Markets. It includes a live tick stream, somewhat realistic candlestick data, and a live order book simulation.", false, delays.very_short),
    new ContentText("I then served this data to a React app called SigmaTerminal via Websocket. It's heavily inspired by Tradovate and Ninjatrader's interfaces.", false, delays.very_short),
    new ContentText("I also included paper trading functionality.<br />", false, delays.very_short),
    new ContentText("##photo:/SigmaTerminal.png:The SigmaTerminal trading terminal:1859:916:", false, delays.very_short),
    new ContentText("SigmaTerminal.png 151.06kB ", false, delays.short),
    new ContentText("##link:extern:x.com/theavgeekbee/status/1947341801297162684:Twitter/X:", false, delays.very_short),
    new ContentText("<hr />", false, delays.very_short),
    new ContentText("<h2> → More to come later!</h2>", false, delays.very_short),
    new ContentText("#navbar#", false, delays.very_short),
];
export default function App() {
    return (<IApp2 texts={info}  starting_text={"user@home: proj\\target\\release$ ./proj --projects"}/>);
}