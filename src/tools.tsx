import React from "react";
import Link from "next/link";
import Image from "next/image";

export function AppLoader(props: { content: string[] }) {
    return (
        <div className={"App-content w-screen"}>
            {props.content.map((value, index) => {
                if (value === "#navbar#") {
                    return (<div key={index}>
                        <Link href={"/projects"}>
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
                if (value.startsWith("##linkto:")) {
                    const links = value.split(":");
                    return (
                        <div key={index}>
                            <Link key={index} href={links[1]}>
                                <button>{"https://" + links[2]}</button>
                            </Link>
                        </div>
                    );
                }
                if (value.startsWith("##photo:")) {
                    const links = value.split(":");
                    return (
                        <div key={index}>
                            <Link key={index} href={links[1]}>
                                <Image src={links[2]} alt={links[3]} className={"App-photo"} width={parseInt(links[4])}
                                       height={parseInt(links[5])} fill={false}/>
                            </Link>
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
        <div className={"App-header flex w-screen flex-row justify-center"}>
            <span className={"text-center pr-10 align-middle"}>made with ❤</span>
            <Link href={"https://github.com/theavgeekbee"}>
                <Image src={"/github-mark-white.png"} alt={"Github"} className={"App-github-image mb-1"} width={23}
                       height={23} fill={false}/>
            </Link>
        </div>
    );
}

export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}