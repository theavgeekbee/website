'use client'
import {delays, IApp2} from "@/tools";
import ContentText from "@/content_text";

export default function App() {
    const texts = [
        new ContentText("<h1>Blog</h1>", true, delays.long),
        new ContentText("Welcome to my blog! I write tutorials and short guides here.", false, delays.short),
        new ContentText("", false, delays.short)
    ];
    return (<IApp2 texts={texts} starting_text={"user@home: proj\\target\\release$ ./proj --blog"}/>);
}