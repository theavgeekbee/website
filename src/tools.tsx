import React from "react";
import Link from "next/link";
import Image from "next/image";

export function AppLoader(props: { content: string[] }) {
    return (
        <div className={"App-content w-screen"}>
            {props.content.map((value, index) => {
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
                if (value.startsWith("##linkto:") && value.split(":").length === 4) {
                    console.log("found link: " + value)
                    const links = value.split(":");
                    return (
                        <div key={index}>
                            <Link key={index} href={"https://" + links[1]} target={"_blank"}>
                                <button>{links[2]}</button>
                            </Link>
                        </div>
                    );
                }
                if (value.startsWith("##photo:") && value.split(":").length === 6) {
                    const links = value.split(":");
                    console.log("found photo: " + value)
                    return (
                        <div key={index}>
                                <Image src={links[1]} alt={links[2]} className={"App-photo"} width={parseInt(links[3])}
                                       height={parseInt(links[4])} fill={false}/>
                        </div>
                    );
                }

                return <div key={index} className={"App-console-line whitespace-pre"}
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

export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}