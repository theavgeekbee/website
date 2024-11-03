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
    new ContentText("<h2> → More to come later!</h2>", false, delays.very_short),
    new ContentText("#navbar#", false, delays.very_short),
];

export default function App() {
    return (<IApp2 texts={info}  starting_text={"user@home: proj\\target\\release$ ./proj --projects"}/>);
}