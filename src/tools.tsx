'use client'
import React, {useCallback, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import ContentText from "@/content_text";

const maxState = function (texts: ContentText[]) {
    let sum = 0;
    for (let i = 0; i < texts.length; i++) {
        if (texts[i].isBlock()) {
            sum++;
        } else {
            sum += texts[i].getText().length;
        }
    }
    return sum;
};

const getStartState = function (texts: ContentText[], index: number) {
    let sum = 0;
    for (let i = 0; i < index; i++) {
        if (texts[i].isBlock()) {
            sum++;
        } else {
            sum += texts[i].getText().length;
        }
    }
    return sum;
}
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

/**
 * @deprecated by IApp2
 */
export function IApp(props: { texts: ContentText[], starting_text: string }) {

    let [content, setContent] = React.useState([props.starting_text]);
    let [state, setState] = React.useState(0);
    let [running, setRunning] = React.useState(true);

    const displayNextState = useCallback(async (stateFrom: number, text: ContentText) => {
        if (state < stateFrom || state > text.stateEnd(stateFrom)) return;
        await delay(text.getDelayTime());
        if (text.isBlock()) {
            setContent([...content, text.getText()]);
            setState(state + 1);
            return;
        }
        const newContent = content.slice(0, content.length - 1);
        newContent.push(content[content.length - 1] + text.getText().charAt(state - stateFrom));
        if (!text.isSameLine() && state === text.stateEnd(stateFrom)) {
            console.log("adding new line")
            newContent.push("");
        }
        setContent(newContent);
        setState(state + 1)
    }, [content, state]);

    useEffect(() => {
        async function exec() {
            if (!running) return;

            for (let i = 0; i < props.texts.length; i++) {
                await displayNextState(getStartState(props.texts, i), props.texts[i]);
            }

            if (state === maxState(props.texts)) {
                setRunning(false);
            }
        }

        exec().then(r => r);
    }, [content, running, displayNextState, state, props.texts]);

    return (
        <AppLoader texts={content}/>
    );
}
/**
 * @deprecated by IApp2
 */
export function AppLoader(props: { texts: string[] }) {
    return (
        <div className={"App-content w-screen"}>
            {props.texts.map((value: string, index) => {
                if (value.startsWith("#navbar#")) {
                    return (<div key={index}>
                        <Link href={"/"} className={"links"}>
                            <button>Home</button>
                        </Link>
                        <Link href={"/projects"} className={"links"}>
                            <button>Projects</button>
                        </Link>
                        &nbsp;
                        <button>About</button>
                        &nbsp;
                        <button>Contact/Socials</button>
                        &nbsp;
                        <button>Blog</button>
                        &nbsp;
                    </div>)
                }
                if (value.includes("##linkto:") && value.split(":").length === 4) {
                    const links = value.split(":");
                    return (
                        <div key={index}>
                            <Link key={index} href={"https://" + links[1]} target={"_blank"}>
                                <button>{links[2]}</button>
                            </Link>
                        </div>
                    );
                }
                if (value.includes("##photo:") && value.split(":").length === 6) {
                    const links = value.split(":");
                    return (
                        <div key={index}>
                            <Image src={links[1]} alt={links[2]} className={"App-photo"} width={parseInt(links[3])}
                                   height={parseInt(links[4])} fill={false}/>
                        </div>
                    );
                }

                return <div key={index} className={"App-console-line"}
                            dangerouslySetInnerHTML={{__html: value}}/>;
            })}
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

/**
 * @deprecated by IApp2
 */
export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}