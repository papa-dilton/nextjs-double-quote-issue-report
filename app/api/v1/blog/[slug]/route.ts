import {readFileSync} from 'fs';
import {NextRequest, NextResponse} from 'next/server'
import {Post, PostsResponse} from "../../../../../Types/Post";
export function GET(req: NextRequest, {params}: {params: {slug: string}}) {
    const allPosts: PostsResponse = JSON.parse(readFileSync('app/api/v1/blog/data.json', 'utf8'))
    const post = allPosts.posts.find((post: Post) => post.slug===params.slug)
    return NextResponse.json(post);
}