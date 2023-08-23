export interface Post {
    id: number;
    title: string;
    slug: string;
}

export interface PostsResponse {
    posts: Post[];
}