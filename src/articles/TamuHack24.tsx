import {TopHeader} from "../App";
import React from "react";

export function TamuHack24() {
    return (
        <div className={"App"}>
            <TopHeader/>
            <TopHeader/>
            <div className="App-nav">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">My Projects</a></li>
                        <li><a href="/contact">Contact Me</a></li>
                        <li className={"selected"}>Blog and Tutorials</li>
                    </ul>
                </nav>
            </div>
            <hr/>
            <h1>TAMU Hack 2024</h1>
            <p>On January 27/28, I went to Texas A&M University to compete in the TAMU Hack 2024 hackathon.</p>
            <h2>What is a hackathon?</h2>
            <p>A hackathon is a competition where groups or teams of people try to make a fully functioning application
                in a set amount of time. Usually, hackathons have a theme that the app must fit, and the app must solve
                a real world problem. At the end of the
                hackathon, judges go through a presentation of everybody's app and decide the winners. Hackathons are
                usually sponsored and have prizes.</p>
            <h2>What is TAMU Hack?</h2>
            <p>TAMU Hack is an annual hackathon held at Texas A&M University. More information can be found <a
                href={"https://tamuhack.org"}>here</a>.</p>
            <h2>What did I make?</h2>
            <p>
                <a href={"https://devpost.com/software/financy-nvp3o1"}>Full DevPost Submission</a>
                <br/>
                My team made an app called Financy. It's a budget tracker which also has short articles on financial information.
                We made the app frontend in Swift UI and the backend in Rust using the Rocket framework.
            </p>
            <h2>What did I make?</h2>
            <p>
                <a href={"https://github.com/InfinitePower563/tamu2024backend"}>Github Link</a>
                <br />
                I mainly worked on the backend. Here's a short description of the code:
                {/*todo*/}
                <ul>
                    <li>
                        <img src={"https://prnt.sc/3-x1KEwWYMeO"} alt={"Code snippet"} />
                    </li>
                </ul>
            </p>
        </div>
    );
}