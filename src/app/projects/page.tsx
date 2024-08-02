'use client';

import {AppLoader, Header} from "@/tools";
import React, {useEffect} from "react";

function App() {
    let [content, setContent] = React.useState(["user@home: /proj/target/release$ ./proj --projects"]);
    let [state, setState] = React.useState(0);
    let [running, setRunning] = React.useState(true);

    useEffect(() => {
        async function exec() {
            if (!running) return;

            const content = [
                "My projects", // 11 characters, states 0 - 11
                "<hr />", // 6 characters, states 12 - 18
                " → TRACON Simulator", // 19 characters, states 19 - 38
                "TRACON Simulator is a project which simulates a real life air traffic controller's terminal.", // 92 characters, states 39 - 131
                "##photo:/ts-1.png:TRACON Simulator image:799:431", // 48 characters, states 132 - 180
                "##linkto:github.com/theavgeekbee/tracon-simulator:Github" // 56 characters, states 181 - 237
            ];


        }

        exec().then(r => r);
    }, []);

    return (
        <AppLoader content={content}/>
    );
}
export default function Projects() {
    return (
        <div className={"App"}>
            <Header />
            <hr />
            <App />
        </div>
    );
}