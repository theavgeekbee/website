import React from "react";

export class Article {
    constructor(title: string, content: React.ReactNode, tags: string[]) {
        this.title = title;
        this.content = content;
        this.tags = tags;
    }
    title: string;
    content: React.ReactNode;
    tags: string[];
}

export const articles = [
    new Article(
        "",
        (
            <div className={"blogArticle"}>
                <h1>Introduction to OpenGL</h1>
                <h2>Lesson 1:</h2>
            </div>
        ),
        ["programming", "opengl", "java", "c++", "graphics"]
    )
];