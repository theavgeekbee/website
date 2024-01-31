import React, {useState} from "react";
import {TopHeader} from "../App";

export function TextRendererArticle() {
    const [language, setLanguage] = useState("Java");

    function onChange() {
        let e: HTMLSelectElement = document.getElementById("language") as HTMLSelectElement;
        setLanguage(e.value)
    }

    if (language === "Java") {
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
                    <hr/>
                </div>
                <div className={"article App-blog-body"}>
                    <p>
                        <label htmlFor="language">Language: </label>
                        <select name="language" id="language" onChange={onChange}>
                            <option value="Java" selected>Java</option>
                            <option value="C++">C++</option>
                        </select>
                    </p>
                    <h1>
                        The Making of TextRenderer
                    </h1>
                    <p>
                        In the making of my <a href={"https://github.com/InfinitePower563/tracon-simulator"}>TRACON
                        Simulator</a>,
                        I had to make a text renderer by loading a font from a .ttf file in LWJGL.
                        The main way to do this was to use the FreeType library. I tried to use it, but after countless
                        hours of
                        head-scratching, I decided to do it myself.
                        <br/>
                        So how did I do it?
                    </p>
                    <ol>
                        <li>
                            First, I needed to load the font file. I created a class called <code>VRCFont</code> (since
                            I was using
                            VRC.ttf from the VRC client) that would load the font file. Although very rudimentary, this
                            method is easier
                            to understand then generating one bitmap file.
                            <ul>
                                <li>
                                    I used an <code>InputStream</code> to load the font file from the resources folder.

                                    <div className={"code-block"}>
                                        InputStream stream = VRCFont.class.getResourceAsStream("/VRC.ttf");<br/>
                                        assert stream != null;<br/>
                                        Font font = Font.createFont(Font.TRUETYPE_FONT, stream).deriveFont(Font.PLAIN,
                                        size);<br/>
                                    </div>
                                </li>
                                <li>
                                    I then draw the code to a <code>BufferedImage</code> which I can save in a temporary
                                    folder.
                                    <div className={"code-block"}>
                                        for (char c : chars) &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;if (font.canDisplay(c)) &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String fileName;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if
                                        (Arrays.toString(letters).contains("" + c)) &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileName
                                        = c + "C";<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;else &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileName
                                        = "" + c;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (c == '*') fileName =
                                        "asterisk";<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Loading
                                        bitmap texture " + c);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createFile("/resources/bitmap/"
                                        + fileName + ".png");<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;drawImage(size, c, font,
                                        fileName);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Finished
                                        drawing bitmap texture " + c);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                        &#125;
                                    </div>
                                </li>
                                <li>
                                    Creating the BufferedImage and saving it are simple matters.
                                    <div className={"code-block"}>
                                        private static void drawImage(int size, char c, Font f, String fileName) throws
                                        IOException &#123;
                                        &nbsp;&nbsp;&nbsp;&nbsp;BufferedImage image = new BufferedImage(size, size,
                                        BufferedImage.TYPE_INT_ARGB);

                                        &nbsp;&nbsp;&nbsp;&nbsp;Graphics2D g2d = image.createGraphics();<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;g2d.setColor(Color.WHITE);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;g2d.setFont(f.deriveFont(Font.PLAIN, size));<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;FontMetrics fm = g2d.getFontMetrics();<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;int x = (size - fm.charWidth(c)) / 2;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;int y = ((size - fm.getHeight()) / 2) +
                                        fm.getAscent();<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;g2d.drawString("" + c, x, y);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;g2d.dispose();<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;ImageIO.write(image, "png", new
                                        File("src/main/resources/bitmap/" + fileName + ".png"));<br/>
                                        &#125;
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Then, I need to load the textures into OpenGL. I used the STB library to load the textures.
                            <ul>
                                <li>
                                    First, I created a record to store textures in a HashMap.
                                    <div className={"code-block"}>public record Alias(ByteBuffer buf, int width, int
                                        height)</div>
                                </li>
                                <li>
                                    Then, I created a method to load the textures
                                    <div className={"code-block"}>
                                        for (char c : chars) &#123;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;try (MemoryStack stack = MemoryStack.stackPush()) &#123;
                                        <br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Generating
                                        alias for " + c);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String filePath =
                                        Character.isUpperCase(c) ? "src/main/resources/bitmap/" + c + "C.png" :
                                        "src/main/resources/bitmap/" + c + ".png";<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (c == '*') filePath =
                                        "src/main/resources/bitmap/asterisk.png";<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IntBuffer widthBuffer =
                                        stack.mallocInt(1);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IntBuffer heightBuffer =
                                        stack.mallocInt(1);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IntBuffer channelsBuffer =
                                        stack.mallocInt(1);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ByteBuffer imageBuffer =
                                        STBImage.stbi_load(filePath, widthBuffer, heightBuffer, channelsBuffer, 4);<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (imageBuffer == null) &#123;
                                        <br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw
                                        new RuntimeException("Failed to load texture image: " +
                                        STBImage.stbi_failure_reason());<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alias.put(c, new
                                        Alias(imageBuffer, widthBuffer.get(), heightBuffer.get()));<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                        &#125;
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Lastly, we can create a method to render the text.
                            <ul>
                                <li>
                                    First, get the alias from the HashMap.
                                    <div className={"code-block"}>
                                        Alias alias = aliases.get(c);
                                    </div>
                                </li>
                                <li>
                                    Then, we load the texture.
                                    <div className={"code-block"}>
                                        textureId = glGenTextures();<br/>

                                        glBindTexture(GL_TEXTURE_2D, textureId);<br/>
                                        <br/>
                                        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);<br/>
                                        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);<br/>
                                        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);<br/>
                                        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);<br/>
                                        <br/>
                                        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA,
                                        GL_UNSIGNED_BYTE, a.buf());<br/>
                                        <br/>
                                        glGenerateMipmap(GL_TEXTURE_2D);<br/>
                                        glBindTexture(GL_TEXTURE_2D, textureId);<br/>
                                        glEnable(GL_TEXTURE_2D);
                                    </div>
                                </li>
                                <li>
                                    Then, we render the texture.
                                    <div className={"code-block"}>
                                        glBegin(GL_QUADS);<br/>
                                        glTexCoord2d(0, 1);<br/>
                                        glVertex2d(pos.x, pos.y);<br/>
                                        glTexCoord2d(1, 1);<br/>
                                        glVertex2d(pos.x + dim.x, pos.y);<br/>
                                        glTexCoord2d(1, 0);<br/>
                                        glVertex2d(pos.x + dim.x, pos.y + dim.y);<br/>
                                        glTexCoord2d(0, 0);<br/>
                                        glVertex2d(pos.x, pos.y + dim.y);<br/>
                                        glEnd();
                                    </div>
                                </li>
                                <li>
                                    Finally, remember to disable/re-enable anything you disabled/enabled.
                                    <div className={"code-block"}>
                                        glDisable(GL_TEXTURE_2D);<br/>
                                        glDeleteTextures(textureId);
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Don't forget to free buffers!
                            <div className={"code-block"}>
                                public static void cleanupAlias() &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Cleaning up aliases...");<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;for (Alias a : alias.values()) &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STBImage.stbi_image_free(a.buf());<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                &#125;<br/><br/>
                                public static void cleanupBitmaps() &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Cleaning up bitmap textures");<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;File file = new File("src/main/resources/bitmap");<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;for (File f : Objects.requireNonNull(file.listFiles())) &#123;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (f.getName().endsWith(".png")) &#123;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!f.delete())
                                System.out.println("Failed to delete file " + f.getAbsolutePath());<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else
                                System.out.println("Cleaned file " + f.getAbsolutePath());<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                &#125;
                            </div>
                        </li>
                    </ol>
                    Feel free to use the code from my Github.
                    <br/>
                    <a href={"https://github.com/InfinitePower563/tracon-simulator/blob/master/src/main/java/skill/issue/dim2d/text/TextRenderer.java"}>TextRenderer.java</a>
                    <br/>
                    <a href={"https://github.com/InfinitePower563/tracon-simulator/blob/master/src/main/java/skill/issue/dim2d/text/VRCFont.java"}>VRCFont.java</a>
                    <br/>
                    <a href={"https://github.com/InfinitePower563/tracon-simulator/blob/master/src/main/java/skill/issue/dim2d/utils/Alias.java"}>Alias.java</a>
                    <br/>
                    <h2>How to Use This Code:</h2>
                    <ol>
                        <li>Make sure you have LWJGL and JOML imported in Gradle. Also ensure that STB is imported
                            alongside LWJGL.
                        </li>
                        <li>In your initialization script, call <code>TextRenderer.init();</code></li>
                        <li>In your render loop, when you want to draw text,
                            call <code>TextRenderer.renderText</code> with the appropriate arguments.
                        </li>
                        <li>Finally, in your shutdown script, call <code>TextRenderer.cleanupAlias()</code> <b>AND</b>
                            <code>VRCFont.cleanupBitmaps()</code></li>
                    </ol>
                </div>
            </div>
        );
    }
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
                <hr/>
            </div>
            <div>
                <h1>
                    The Making of TextRenderer
                </h1>
                <p>
                    <label htmlFor="language">Language: </label>
                    <select name="language" id="language" onChange={onChange}>
                        <option value="Java">Java</option>
                        <option value="C++" selected>C++</option>
                    </select>
                </p>
                <>
                    The C++ implementation is currently a work in progress. If you want to see the Java implementation
                    for clues,
                    please select Java from the dropdown.
                </>
            </div>
        </div>
    );
}

export function TextRendererArticleTags() {
    return ["java", "c++", "opengl", "lwjgl", "stb", "text rendering", "rendering", "the making of text renderer"];
}

export function TextRendererArticleShort() {
    return (
        <section className={"articleShort"}>
            <h1><a href={"/blog/text-renderer"}>The Making of TextRenderer</a></h1>
            <p>
                This article describes how I made a Text Renderer for my TRACON Simulator from scratch.
            </p>
        </section>
    )
}