import {Post} from "../../../Types/Post";

// Problematic code below. Does not work on Windows due to double quotes in file names
export async function generateStaticParams() {
    return await fetch('http://localhost:3000/api/v1/blog/all')
        .then((res) => res.json())
        .then((res) => res.posts.map((post: Post) => ({slug: post.slug})));
}
// End of problematic code

export default async function BlogPage({params}: { params: { slug: string } }) {
    const slug = params.slug;
    const postData = await fetch('http://localhost:3000/api/v1/blog/' + slug)
        .then((res) => res.json())
    return (
        <div>
            <h1>{postData.title}</h1>
        </div>
    );
}