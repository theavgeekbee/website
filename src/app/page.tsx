'use client';

import React, {useEffect} from "react";
import {AppLoader, delay, Header} from "@/tools";

function App() {
    let [content, setContent] = React.useState(["user@home: ~$ cd /proj"]);
    let [state, setState] = React.useState(0);
    let [running, setRunning] = React.useState(true);

    useEffect(() => {
        async function exec() {
            if (!running) return;
            function wrapGreenText(text: string) {
                return `<span class="text-green-500">${text}</span>`;
            }
            // make the words "Compiling" and "Finished" green
            const newContent = [
                `user@home: proj$ cargo build --release`, // type 21 characters, stages 0 - 20
                `   ${wrapGreenText("Compiling")} proj v0.1.0 (/proj)`, // type 0 characters, stage 21
                `   ${wrapGreenText("Finished")} release [optimized] target(s) in 1.3s`, // type 0 characters, stage 22
                `user@home: proj$ ./target/release/proj`, // type 21 characters , stages 23 - 43
            ];

            if (state === 0) {
                await delay(500);
                setContent([...content, "user@home: proj$ "]);
            }
            if (state > 0 && state <= 21) {
                await delay(25);
                // set the last element of content
                const newContent = content.slice(0, content.length - 1);
                newContent.push(`user@home: proj$ ${"cargo build --release".slice(0, state)}`);
                setContent(newContent);
            }
            if (state === 22) {
                await delay(500);
                setContent([...content, newContent[1]]);
            }
            if (state === 23) {
                await delay(1300);
                setContent([...content, newContent[2]]);
            }
            if (state === 24) {
                await delay(500);
                setContent([...content, "user@home: proj$ "]);
            }
            if (state > 24 && state <= 44) {
                await delay(25);
                const newContent = content.slice(0, content.length - 1);
                newContent.push(`user@home: proj$ ${"./target/release/proj".slice(0, state - 23)}`);
                setContent(newContent);
            }
            if (state >= 45) {
                const updater = [
                    `Hello! Welcome to my website!`, // 29 characters, states 45 - 74
                    `My name's Nathan, I'm a software engineer and full time high school student.`, // 76 characters, states 75 to 151
                    `I have many activities that I enjoy doing. I'll list some here.`, // 63 characters, states 152 to 215
                    ` → Programming <br /> → Flying flight simulators <br /> → Playing video games`, // 76 characters, states 216 to 292
                    `I also have a few projects I'm working on, and some that are already completed.`, // 79 characters, states 293 to 372
                    `#navbar#` // 43 characters, states 373 - 416
                ];
                if (state === 45) setContent([...content, " ","H"]);
                if (state > 45 && state <= 74) {
                    await delay(5);
                    const newContent = content.slice(0, content.length - 1);
                    newContent.push(updater[0].slice(0, state - 45));
                    setContent(newContent);
                }
                if (state === 75) setContent([...content, "M"]);
                if (state > 75 && state <= 151) {
                    await delay(5);
                    const newContent = content.slice(0, content.length - 1);
                    newContent.push(updater[1].slice(0, state - 75));
                    setContent(newContent);
                }
                if (state === 152) setContent([...content, "I"]);
                if (state > 152 && state <= 215) {
                    await delay(5);
                    const newContent = content.slice(0, content.length - 1);
                    newContent.push(updater[2].slice(0, state - 152));
                    setContent(newContent);
                }
                if (state === 216) setContent([...content, " "]);
                if (state > 216 && state <= 292) {
                    await delay(5);
                    const newContent = content.slice(0, content.length - 1);
                    newContent.push(updater[3].slice(0, state - 216));
                    setContent(newContent);
                }
                if (state === 293) setContent([...content, "Y"]);
                if (state > 293 && state <= 372) {
                    await delay(5);
                    const newContent = content.slice(0, content.length - 1);
                    newContent.push(updater[4].slice(0, state - 293));
                    setContent(newContent);
                }
                if (state === 373) setContent([...content, "Y"]);
                if (state > 373 && state <= 416) {
                    await delay(5);
                    const newContent = content.slice(0, content.length - 1);
                    newContent.push(updater[5].slice(0, state - 373));
                    setContent(newContent);
                }
            }

            setState(state + 1);
            if (state === 431) {
                setRunning(false);
            }
        }
        exec().then(r => r);
    }, [content, running, state]);

    return (
        <AppLoader content={content}/>
    );
}

export default function Home() {
    return (
        <div className={"App"}>
            <Header/>
            <hr />
            <App />
        </div>
    )
}
