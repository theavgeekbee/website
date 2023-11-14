import React from 'react';
import './App.css';
function TopHeader() {
    return (
        <>
            <div className="App-header">
                <h1><a href="/">Nathan Lee</a></h1>
                <p><span>@theaviationbee</span></p>
            </div>
            <hr/>
        </>
    );
}
function NavBar() {
  return (
    <div className="App-nav">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          <li><a href="/projects">My Projects</a></li>
          <li><a href="/contact">Contact Me</a></li>
          <li><a href="/blog">Blog and Tutorials</a></li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}
function Footer() {
    return (
        <div className="App-footer">
            <footer>
                <hr />
            <p>Made by Nathan Lee</p>
            </footer>
        </div>
    );
}
function StickyFooter() {
    return (
        <div className="App-footer sticky">
            <footer>
                <hr />
                <p>Made by Nathan Lee</p>
            </footer>
        </div>
    );
}

export function App() {
  return (
    <div className="App">
        <TopHeader />
        <div className="App-nav">
            <nav>
                <ul>
                    <li className={"selected"}>Home</li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">My Projects</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                    <li><a href="/blog">Blog and Tutorials</a></li>
                </ul>
            </nav>
            <hr />
        </div>
        <div className="App-body">
            <h1>Welcome!</h1>
            <p>Hello there, and welcome to my website.</p>
            <p>Who am I? I'm a:</p>
            <ul>
                <li>Aviation enthusiast</li>
                <li>Minecraft gamer</li>
                <li>Professional programmer</li>
                <li>Speed cuber</li>
                <li>High school student</li>
                <li>Violinist</li>
            </ul>
            <h1>
                What's on this website?
            </h1>
            <ul>
                <li>Go to <a href="/about">About</a> to learn more about me</li>
                <li>Go to <a href="/projects">Projects</a> to learn more about my projects</li>
                <li>Go to <a href="/contact">Contact</a> if you want to contact me</li>
                <li>Go to <a href="/blog">My Blog</a> if you want to see some of my blog posts. I also post tutorials on there too.</li>
            </ul>
        </div>
        <StickyFooter />
    </div>
  );
}
export function About() {
    return (
        <div className="App">
            <TopHeader />
            <div className="App-nav">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li className={"selected"}>About</li>
                        <li><a href="/projects">My Projects</a></li>
                        <li><a href="/contact">Contact Me</a></li>
                        <li><a href="/blog">Blog and Tutorials</a></li>
                    </ul>
                </nav>
                <hr />
            </div>
            <div className="App-body about">
                    <h1>Hello!</h1>
                    <p>My name is Nathan Lee, and here are some things about me!</p>
                <section>
                    <h2>Aviation Enthusiast</h2>
                    <p>As my username may suggest, I'm a very big aviation nerd. I usually fly flight simulators in my free time. The simulator I use is <a href="https://www.x-plane.com" target="/">X-Plane 12</a> and my favorite aircraft is the <a href="https://x-plane.to/file/309/zibo-mod-b737-800x" target={"/"}>Zibo Boeing 737-800</a>.</p>
                    <p><br />Read more about my flight simulator antics on my <a href="/blog" target="/">blog</a>!</p>
                </section>
                <section>
                    <h2>Professional Programmer</h2>
                    <p>I'm a lead developer working at KEM Energy, Inc.</p>
                    <p><br />For business inquiries, contact me <a href="/contact">here</a>!</p>
                </section>
                <section>
                    <h2>Speed Cuber</h2>
                    <p>Occasionally, I also dabble in solving various Rubik's Cubes. <a href={"https://www.worldcubeassociation.org/persons/2022LEEN02"} target="/">View my competition results here</a>!</p>
                    <p><br />Read more about my speed solving journey on my <a href="/blog" target="/">blog</a>! I also occasionally post good times on there.</p>
                </section>
                <section>
                    <h2>High School Student</h2>
                    <p>I'm also a student a Cinco Ranch Junior High. I'm currently in 9th grade.</p>
                    <p>I'm also part of the CRHS Orchestra as well!</p>
                    <p><br />Read more about my academic and musical journey on my <a href="/blog" target="/">blog</a>!</p>
                </section>
            </div>
            <Footer />
        </div>
    );
}
export function NotFound() {
    return (
        <div className="App">
            <TopHeader />
            <NavBar />
            <div className="App-body">
                <h1>Looks like the link was invalid</h1>
                <h2>Try checking the spelling, or go to the <a href="/">home page</a> to navigate!</h2>
                <img src="https://http.cat/404" alt="404 Not Found" />
            </div>
            <StickyFooter />
        </div>
    );
}
export function Projects() {
    return (
        <div className="App">
            <TopHeader />
            <div className="App-nav">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li className={"selected"}>My Projects</li>
                        <li><a href="/contact">Contact Me</a></li>
                        <li><a href="/blog">Blog and Tutorials</a></li>
                    </ul>
                </nav>
                <hr />
            </div>
            <div className="App-body about">
                <h1>My Projects</h1>
                <p>Here are some of my projects!</p>
                <section>
                    <h1>
                        <a href={"https://github.com/InfinitePower563/tracon-simulator"} target={"/"}>
                            TRACON Simulator
                        </a>
                    </h1>
                    <p>
                        In aviation, a TRACON, or <b>T</b>erminal <b>R</b>adar <b>A</b>pproach <b>Con</b>trol facility is a facility that controls aircraft in the terminal phase of flight, usually within 30-50 miles of an airport. This simulator is a simulator of a TRACON facility, and is a work in progress.
                        If you're a virtual controller, please DO NOT use this simulator for training purposes. This is meant to be a little side project I use to enhance my OpenGL skills, and you can find tutorials on my <a href="/blog" target={"/"}>blog</a>.
                        If you ARE a virtual controller, please check the documentation for <a href={"https://vnas.vatsim.net/crc"} target={"/"}>vNAS and CRC</a> in the United States or <a href={"https://www.euroscope.hu/wp/t"} target={"/"}>EuroScope</a> in the rest of the world.
                    </p>
                </section>
                <section>
                    <h1>
                        <a href={"https://github.com/InfinitePower563/SimpleNet"} target={"/"}>
                            SimpleNet
                        </a>
                    </h1>
                    <p>
                        <b>SimpleNet</b> is a Java library I created to run network requests more efficiently. Normally, this is a very easy but menial task that is time consuming. I have packaged all needed information into a simple-to-use library that you can import via Maven or Gradle. If you would like to use the library, check out the
                        Github repository linked above. If you would like to read about how I made this library and how it works, check out my <a href={"/blog"} target={"/"}>blog</a>!
                    </p>
                </section>
            </div>
            <StickyFooter />
        </div>
    )
}
export function WIP() {
    return (
        <div className="App">
            <TopHeader />
            <NavBar />
            <div className="App-body">
                <h1>Work in Progress</h1>
                <h2>Congratulations, you found this page, which is a work in progress!</h2>
                <h3><a href="/">Take me home</a></h3>
            </div>
            <StickyFooter />
        </div>
    );
}