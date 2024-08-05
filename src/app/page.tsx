'use client';

import React from "react";
import {delays, IApp2} from "@/tools";
import ContentText from "@/content_text";

const texts = [
    new ContentText("<br />user@home: proj$ ", true, delays.short),
    new ContentText("cargo build --release", false, delays.short, true),
    new ContentText(`    <span class="text-green-500">Compiling</span> proj v0.1.0 (/proj)`, true, delays.short),
    new ContentText(`    <span class="text-green-500">Finished</span> release [optimized] target(s) in 0.7s`, true, delays.long),
    new ContentText("user@home: proj$ ", true, delays.short),
    new ContentText("./target/release/proj", false, delays.short, true),
    new ContentText("<br />Hello! Welcome to my website!", false, delays.very_short),
    new ContentText("My name's Nathan, I'm a software engineer and full time high school student.", false, delays.very_short),
    new ContentText("I have many activities that I enjoy doing. I'll list some here.<br/>", false, delays.very_short),
    new ContentText(" → Programming <br /> → Flying flight simulators <br /> → Playing video games", false, delays.very_short),
    new ContentText("I also have a few projects I'm working on, and some that are already completed.", false, delays.very_short),
    new ContentText("#navbar#", true, delays.very_short),
];


export default function App() {
    return (
        <IApp2 texts={texts} starting_text={"user@home: ~$ cd /proj"}/>
    );
}