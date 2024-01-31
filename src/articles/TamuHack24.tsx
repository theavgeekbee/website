import {TopHeader} from "../App";
import React from "react";

export function TamuHack24() {
    return (
        <div className={"App"}>
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
            <div className={"article App-blog-body"}>
                <h1>TAMU Hack 2024</h1>
                <p>On January 27/28, I went to Texas A&M University to compete in the TAMU Hack 2024 hackathon.</p>
                <h2>What is a hackathon?</h2>
                <p>A hackathon is a competition where groups or teams of people try to make a fully functioning
                    application
                    in a set amount of time. Usually, hackathons have a theme that the app must fit, and the app must
                    solve
                    a real world problem. At the end of the
                    hackathon, judges go through a presentation of everybody's app and decide the winners. Hackathons
                    are
                    usually sponsored and have prizes.</p>
                <h2>What is TAMU Hack?</h2>
                <p>TAMU Hack is an annual hackathon held at Texas A&M University. More information can be found <a
                    href={"https://tamuhack.org"}>here</a>.</p>
                <h2>What did I make?</h2>
                <p>
                    <a href={"https://devpost.com/software/financy-nvp3o1"}>Full DevPost Submission</a>
                    <br/>
                    My team made an app called Financy. It's a budget tracker which also has short articles on financial
                    information.
                    We made the app frontend in Swift UI and the backend in Rust using the Rocket framework.
                </p>
                <h2>What did I make?</h2>
                <p>
                    <a href={"https://github.com/InfinitePower563/tamu2024backend"}>Github Link</a>
                    <br/>
                    I mainly worked on the backend. Here's a short description of the code:
                    <ul>
                        <li>
                            <h3>Lines 16-40</h3>
                            <p>Define some basic structures needed for the application.</p>
                        </li>
                        <li>
                            <h3>Lines 44-84</h3>
                            <p>Define some utility functions.</p>
                        </li>
                        <li>
                            <h3>Lines 87-139</h3>
                            <p>This implements the <code>FromData</code> trait for <code>KeyTransaction</code> so
                                incoming
                                requests for new API keys can be processed.</p>
                        </li>
                        <li>
                            <h3>Lines 141-168</h3>
                            <p>Do the same for the <code>Transaction</code> structure.</p>
                        </li>
                        <li>
                            <h3>Lines 170-188</h3>
                            <p>Do the same for the <code>SignUp</code> structure.</p>
                        </li>
                        <li>
                            <h3>Lines 195-294</h3>
                            <p>Define routes for the Rocket API.</p>
                            <p>These reference the <code>FromData</code> structures defined at lines 87-188 and add them
                                to their respective <code>Vec</code>s</p>
                        </li>
                        <li>
                            <h3>Lines 295-314</h3>
                            <p>
                                This is the main entrypoint which starts the Rocket server.
                            </p>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export function TamuHack24Tags() {
    return ["tamu2024", "tamu hack 2024", "hackathon", "rust", "rocket", "financy"]
}
export function Tamu2024Short() {
    return (
        <section className={"articleShort"}>
            <h1><a href={"/blog/tamu2024"}>TAMU Hack 2024</a></h1>
            <p>
                I participated in the annual TAMU Hack hackathon. Here's what I made.
            </p>
        </section>
    )
}