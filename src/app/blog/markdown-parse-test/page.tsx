'use client';
import {BlogPage} from "@/tools";
import content from "@/../public/blogs/Test.md";

export default function Blog() {
    return <BlogPage content={content}/>;
}