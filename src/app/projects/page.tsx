'use client';

import {AppLoader, delay, Header} from "@/tools";
import React, {useEffect} from "react";

function App() {
    let [content, setContent] = React.useState(["user@home: /proj/target/release$ ./proj --projects"]);
    let [state, setState] = React.useState(0);
    let [running, setRunning] = React.useState(true);

    useEffect(() => {
        if (!running) return;

        async function exec() {


            const info = [
                "My projects ", // 11 characters, states 0 - 11
                "<hr /> ", // 6 characters, states 12 - 18
                " → TRACON Simulator ", // 19 characters, states 19 - 38
                "TRACON Simulator is a project which simulates a real life air traffic controller's terminal. ", // 92 characters, states 39 - 131
                "##photo:/ts-1.png:TRACON Simulator image:799:431:", // 48 characters, states 132 - 180
                "ts-1.png 1.9kB ", // 14 characters, states 181 - 195
                "##linkto:github.com/theavgeekbee/tracon-simulator:Github:", // 56 characters, states 196 - 252
                "<hr /> ", // 6 characters, states 253-259
                " → SimpleNet ", // 12 characters, states 260 - 272
                "SimpleNet is a Java networking library I made. Deprecated by HttpClient in Java 11, but you can still look at the code. ", // 119 characteres, states 273 - 392
                "##linkto:github.com/theavgeekbee/SimpleNet:Github:", // 52 characters, states 393 - 445
                "<hr /> ", //6 characters, states 446 - 452
                " → More to come later! ", // 22 characters, states 453 - 475
                "#navbar# " // 8 characters, states 476 - 484
            ];

            async function simulateTyping(stateFrom: number, stateTo: number, text: string) {
                if (state === stateFrom) {
                    setContent([...content, "" + text.at(0)])
                } else if (state > stateFrom && state <= stateTo) {
                    const newContent = content.slice(0, content.length - 1);
                    newContent.push(content[content.length - 1] + text.at(state - stateFrom));
                    setContent(newContent);
                }
                setState(state + 1);
            }

            await delay(5);
            await simulateTyping(0, 11, info[0]);
            await simulateTyping(12, 18, info[1]);
            await simulateTyping(19, 38, info[2]);
            await simulateTyping(39, 131, info[3]);
            await simulateTyping(132, 180, info[4]);
            await simulateTyping(181, 195, info[5]);
            await simulateTyping(196, 252, info[6]);
            await simulateTyping(253, 259, info[7]);
            await simulateTyping(260, 272, info[8]);
            await simulateTyping(273, 392, info[9]);
            await simulateTyping(393, 445, info[10]);
            await simulateTyping(446, 452, info[11]);
            await simulateTyping(453, 475, info[12]);
            await simulateTyping(476, 484, info[13]);


            if (state === 485) {
                setRunning(false);
            }
        }

        exec().then(r => r);
    }, [content, running, state]);

    return (
        <AppLoader content={content}/>
    );
}

export default function Projects() {
    return (
        <div className={"App"}>
            <Header/>
            <hr/>
            <App/>
        </div>
    );
}