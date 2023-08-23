import {Post} from "../Types/Post";
import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
    const posts = await fetch('http://localhost:3000/api/v1/blog/all').then(res => res.json()).then(res => res.posts);
    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts.map((post: Post) => (
                    <li><Link href={`/blog/${post.slug}`}>{post.title}</Link></li>
                ))}
            </ul>
        </>
    )
}
