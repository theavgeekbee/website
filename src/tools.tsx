'use client'
import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import ContentText from "@/content_text";

export const delays = {
    very_short: 5,
    short: 25,
    medium: 500,
    long: 700,
};

export function IApp2(props: { texts: ContentText[], starting_text: string }) {
    const [displayedText, setDisplayedText] = React.useState(props.starting_text);
    const [textIndex, setTextIndex] = React.useState(0);
    const [arrayIndex, setArrayIndex] = React.useState(0);

    useEffect(() => {
        const texts = props.texts;
        // format some of the texts
        for (let i = 0; i < texts.length; i++) {
            if (texts[i].getText().includes("##link")) {
                const parts = texts[i].getText().split(":");
                const isExternal = parts[1] === "extern";
                texts[i] = new ContentText(
                    `<a href="${(isExternal ? "https://" : "") + parts[2]}" ${isExternal ? `target="_blank"` : ""}><button>${parts[3]}</button></a>`,
                    texts[i].isBlock(),
                    texts[i].getDelayTime(),
                    texts[i].isSameLine()
                );
            }
            if (texts[i].getText().includes("##photo")) {
                const parts = texts[i].getText().split(":");
                texts[i] = new ContentText(
                    `<img src="${parts[1]}" alt="${parts[2]}" width="${parts[3]}" height="${parts[4]}" />`,
                    texts[i].isBlock(),
                    texts[i].getDelayTime(),
                    texts[i].isSameLine()
                );
            }
            if (texts[i].getText().includes("#navbar#")) {
                texts[i] = new ContentText(
                    `<div><a href="/" class="links"><button>Home</button></a><a href="/projects" class="links"><button>Projects</button></a><a href="/contact" class="links"><button>Contact/Socials</button></a><button class="wip">Blog</button></div>`,
                    texts[i].isBlock(),
                    texts[i].getDelayTime(),
                    texts[i].isSameLine()
                );
            }
        }
        const isNotHeading = (toSearch: string) => {
            return !toSearch.includes("<h");
        }
        const handleNextLine = () => {
            setDisplayedText(
                prevText => prevText
                    + (
                        arrayIndex + 1 < texts.length &&
                        !texts[arrayIndex + 1].isSameLine() &&
                        isNotHeading(texts[arrayIndex + 1].getText())
                            ? "<br />" : ""
                    )
            );
            setArrayIndex(arrayIndex + 1);
            setTextIndex(0);
            return;
        }
        if (arrayIndex >= texts.length) return;
        if (textIndex >= texts[arrayIndex].getText().length) {
            handleNextLine();
        }
        let timer;
        if (texts[arrayIndex].isBlock()) {
            timer = setTimeout(() => {
                setDisplayedText(prevText => prevText + texts[arrayIndex].getText());
                handleNextLine();
            }, texts[arrayIndex].getDelayTime());
        } else {
            timer = setTimeout(() => {
                setDisplayedText(prevText => prevText + texts[arrayIndex].getText()[textIndex]);
                setTextIndex(textIndex + 1);
            }, texts[arrayIndex].getDelayTime());
        }
        return () => clearTimeout(timer);
    }, [textIndex, arrayIndex, props]);

    return (
        <div className={"App"}>
            <Header/>
            <hr />
            <div className={"App-console-line"} dangerouslySetInnerHTML={{__html: displayedText}}/>
        </div>
    );
}

export function Header() {
    return (
        <div className={"App-header"}>
            <span className={"App-header-text"}>made with ❤</span>
            <Link href={"https://github.com/theavgeekbee/website"} target={"_blank"}>
                <Image src={"/github-mark-white.png"} alt={"Github"} className={"App-github-image"} width={23}
                       height={23} fill={false}/>
            </Link>
        </div>
    );
}
