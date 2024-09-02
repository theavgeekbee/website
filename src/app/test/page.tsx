'use client'
import {delays, IApp2} from "@/tools";
import ContentText from "@/content_text";

export default function App() {
    const texts = [
        new ContentText("<h1>this is a block text</h1>", true, delays.long),
        new ContentText("this is a normal text", false, delays.short),
        new ContentText("this is more block text|", true, delays.medium),
        new ContentText("this is normal text inline with the previous text", false, delays.very_short, true),
        new ContentText("this is a block text", true, delays.medium),
        new ContentText("##link:extern:google.com:This is a link to google.com:", false, 5),
        new ContentText("##photo:/vercel.svg:Vercel Logo:283:64:", false, 5),
    ];
    return (<IApp2 texts={texts} starting_text={"this is starting text"}/>);
}