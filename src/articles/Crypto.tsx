import {TopHeader} from "../App";
import React from "react";

export function Crypto() {
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
                <h1>The Argument Against Cryptocurrencies</h1>
                <p>
                    I've recently had a terrible experience with cryptocurrencies, and I'm here to document it.
                </p>
                <h2>What is a cryptocurrency/blockchain?</h2>
                <p>
                    Aptly put, a blockchain is simply a digital ledger that records transactions. Cryptocurrencies are
                    the currency that is involved in these transactions. The most popular cryptocurrency, and the one I
                    dealt with, is Bitcoin.
                </p>
                <h2>My Experience</h2>
                <p>
                    I was attempting to buy something that was only available for purchase with Bitcoin (don't worry,
                    it was not anything illegal). I downloaded the Exodus wallet, which is self-managed. This means
                    that there is no company that can manage my wallet, freeze my funds, etc. So you may be thinking,
                    simply go to the website through Exodus and buy some Bitcoin, right? It's not that simple. As I live
                    in the United States, all companies that sell Bitcoin that use real USD online have to follow&nbsp;
                    <a href={"https://en.wikipedia.org/wiki/Know_your_customer"}>Know Your Customer (KYC) law</a>.
                    This essentially means that I have to give up my personal information to the company that sells
                    the crypto. This includes my:<br/>
                    <ul>
                        <li>Full Legal Name</li>
                        <li>Date of Birth</li>
                        <li>Full Social Security Number</li>
                        <li>My Address</li>
                    </ul>
                    Now you may be thinking, why not give up that information? Surely, this information will be kept in
                    safe hands, right? The problem is, there is no way to be sure that someone won't use that
                    information
                    maliciously. The least that could potentially happen is a data breach leading to someone stealing
                    my identity.
                </p>
                <h2>The Solution To KYC</h2>
                <p>
                    So now, I have to find an exchange where I can buy Bitcoin without having to give up my entire
                    identity to an unknown entity. There's a simple way to do this. Bitcoin kiosks exist around the
                    country where you can buy Bitcoin with cash, on location, little to no KYC required. So I found one
                    near me, and I paid my money.
                </p>
                <h2>Yet Another Problem Arises</h2>
                <p>
                    The thing I wanted to buy with Bitcoin was only worth $25 USD. At the time of writing, that is
                    0.00039 Bitcoin. I paid $36 USD for 0.00040224 Bitcoin. Converting this on Google, it should have
                    been 0.00056 Bitcoin. This is essentially a 44% markup at that exchange, although noting the
                    $1.28 transaction fee, it's more like a 38% markup if I'm being generous.
                    <br/>
                    So what? it's only $10 worth of Bitcoin, and the maintainers of the kiosk have to make money to
                    maintain it anyways. Surely this isn't the only fee I have to pay, right? Wrong again.
                    <br/>
                    I went to the website to pay for the thing I wanted to buy, and they charge me 0.00038946 BTC, which
                    is about $25. So clearly, since I have 0.00040224 BTC, I have enough to buy it, right? Wrong.
                    For no reason at all, another network fee of 0.00003632 BTC is charged, which is literally $2.72.
                    So now, I have to go back to the kiosk, buy more Bitcoin, and pay another $20 USD to buy the thing
                    that was meant to be $25.
                </p>
                <h2>The Total Cost</h2>
                <p>
                    In total, I have spent $56 USD total to buy something that was meant to be $25.
                    Accounting for the amount I have left over, which is 0.00021187 BTC, I have lost a grand total of
                    $17.41 USD, which means that 30% of all the money I spent was lost in fees.
                </p>
                <h2>The Lesson To Learn</h2>
                <p>
                    If you're considering buying cryptocurrencies, then you should be well aware of the extra
                    fees that you may incur. Luckily, in the grand scheme of things, I only lost about $20 in this
                    transaction. But if you're not careful, and you're actually investing a sizable chunk of money,
                    then you could lose a considerably larger amount of money. <br/>
                    Personally, I'm going to be dealing through Stripe from now on. Unfortunately, this time, the only
                    alternate payment method was <a
                    href={"https://www.mcafee.com/blogs/security-news/the-paypal-breach-who-was-affected-and-how-you-can-protect-yourself/"}>PayPal</a> and
                    they also have a <a href={"https://www.reddit.com/r/paypal/?f=flair_name%3A\"I%20hate%20PayPal\""}>considerable history of messing around</a>.
                </p>
            </div>
        </div>
    );
}

export function CryptoTags() {
    return ["blockchain", "cryptocurrency", "bitcoin", "crypto", "the argument against crypto"]
}

export function CryptoShort() {
    return (
        <section className={"articleShort"}>
            <h1><a href={"/blog/crypto"}>The Argument Against Cryptocurrencies</a></h1>
            <p>
                My experience with cryptocurrencies, and what you should look out for.
            </p>
        </section>
    )
}