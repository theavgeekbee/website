'use client';
import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import ContentText from "@/content_text";
import parse from "html-react-parser"; // 👈 NEW

export const delays = {
  very_short: 5,
  short: 25,
  medium: 500,
  long: 700,
};

function parseContent(text: string): React.ReactNode {
  if (text.includes("##link")) {
    const parts = text.split(":");
    const isExternal = parts[1] === "extern";
    const href = (isExternal ? "https://" : "") + parts[2];
    return (
      <a href={href} target={isExternal ? "_blank" : undefined} key={Math.random()}>
        <button>{parts[3]}</button>
      </a>
    );
  }
  if (text.includes("##photo")) {
    const parts = text.split(":");
    return (
      <Image
        key={Math.random()}
        src={parts[1]}
        alt={parts[2]}
        width={parseInt(parts[3])}
        height={parseInt(parts[4])}
      />
    );
  }
  if (text.includes("#navbar#")) {
    return (
      <div key={Math.random()}>
        <Link href="/" className="links" passHref>
          <button>Home</button>
        </Link>
        <Link href="/projects" className="links">
          <button>Projects</button>
        </Link>
        <Link href="/contact" className="links">
          <button>Contact/Socials</button>
        </Link>
        <Link href="https://dndw.nwlee.tech" className="links" target="_blank">
          <button>Blog &#8599;</button>
        </Link>
      </div>
    );
  }

  // If it's just inline HTML like <b> or <i>, parse it safely
  return parse(text);
}

export function IApp2(props: { texts: ContentText[], starting_text: string }) {
  const [displayedNodes, setDisplayedNodes] = React.useState<React.ReactNode[]>([
    parse(props.starting_text)
  ]);
  const [textIndex, setTextIndex] = React.useState(0);
  const [arrayIndex, setArrayIndex] = React.useState(0);

  useEffect(() => {
    const texts = [...props.texts];
    if (arrayIndex >= texts.length) return;

    const currentText = texts[arrayIndex].getText();

    const isHtmlBlock = currentText.trim().startsWith("<") || currentText.includes("##") || currentText.includes("#navbar#");

    const handleNextLine = () => {
      const next = arrayIndex + 1 < texts.length ? texts[arrayIndex + 1] : null;
      const shouldBreak =
        next &&
        !next.isSameLine() &&
        !next.getText().includes("<h");

      if (shouldBreak) {
        setDisplayedNodes(prev => [
          ...prev,
          <br key={`br-${arrayIndex}`}/>
        ])
      }
      setArrayIndex(prev => prev + 1);
      setTextIndex(0);
    };

    let timer: NodeJS.Timeout;

    if (textIndex >= currentText.length && !isHtmlBlock) {
      handleNextLine();
      return;
    }

    const delay = texts[arrayIndex].getDelayTime();

    if (texts[arrayIndex].isBlock() || isHtmlBlock) {
      timer = setTimeout(() => {
        const parsed = parseContent(currentText); // parseContent uses parse()
        setDisplayedNodes(prev => [...prev, parsed]);
        handleNextLine();
      }, delay);
    } else {
      timer = setTimeout(() => {
        setDisplayedNodes(prev => {
          const updated = [...prev];
          const last = updated[updated.length - 1];

          if (
            React.isValidElement(last) &&
            last.type === "span" &&
            typeof (last as React.ReactElement<any, any>).props.children === "string"
          ) {
            // Add to existing span
            const nextChar = currentText[textIndex];
            updated[updated.length - 1] = (
              <span key={`text-${arrayIndex}-${textIndex}`}>
                                {(last as React.ReactElement<any, any>).props.children + nextChar}
                            </span>
            );
          } else {
            // Create new span
            updated.push(
              <span key={`text-${arrayIndex}-${textIndex}`}>
                                {currentText[textIndex]}
                            </span>
            );
          }
          return updated;
        });
        setTextIndex(prev => prev + 1);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [textIndex, arrayIndex, props]);

  return (
    <div className={"App"}>
      <Header/>
      <hr/>
      <div className={"App-console-line-container"}>
        <div className={"App-console-line"}>
          {displayedNodes.map((node, i) => (
            <React.Fragment key={i}>{node}</React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className={"App-header"}>
      <span className={"App-header-text"}>made with ❤</span>
      <Link href={"https://github.com/theavgeekbee/website"} target={"_blank"}>
        <Image
          src={"/github-mark-white.png"}
          alt={"Github"}
          className={"App-github-image"}
          width={23}
          height={23}
          fill={false}
        />
      </Link>
    </div>
  );
}
