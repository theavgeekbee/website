import React from "react";
import {TextRendererArticleShort, TextRendererArticleTags} from "./articles/TextRenderer";
import ReactDOMServer from 'react-dom/server';

function areWordsClose(word1:string, word2:string) {
    let difference = 0;
    let longerWord = word1;
    let shorterWord = word2;
    if (word1.length < word2.length) {
        longerWord = word2;
        shorterWord = word1;
    }
    if (shorterWord.length < 2) {
        return false;
    }
    let longerWordShortened = longerWord.substring(0, shorterWord.length);
    for (let i = 0; i < shorterWord.length; i++) {
        if (shorterWord[i] !== longerWordShortened[i]) {
            difference++;
        }
    }
    return difference <= 2;
}
function updateArticleList() {
    let searchResult = document.getElementById("searchResult");
    if (searchResult === null) {
        return;
    }
    let searchInput = document.getElementsByClassName("searchBar")[0] as HTMLInputElement;
    if (searchInput === undefined) {
        return;
    }
    let searchInputValue = searchInput.value.toLowerCase();

    let elementsToDisplay = [];
    for (let i = 0; i < TextRendererArticleTags().length; i++) {
        let tag = TextRendererArticleTags()[i];
        if (areWordsClose(tag.toLowerCase(), searchInputValue)) {
            elementsToDisplay.push(ReactDOMServer.renderToString(<TextRendererArticleShort />));
            break;
        }
    }
    searchResult.innerHTML = elementsToDisplay.join("");
}
function searchBar() {
    return (
        <div>
            <input type="text" placeholder="Search.." className={"searchBar"} onChange={updateArticleList}/>
        </div>
    );
}
export function ArticleDisplay() {
    return (
        <div>
            {searchBar()}
            <div id="searchResult" className={"about"}>
            </div>
        </div>
    );
}