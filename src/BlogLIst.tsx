import React from "react";
import { Post } from "./interfaces/post";

interface BlogListProps {
    blogs: Post[]
}

const BlogList: React.FC<BlogListProps> = ({blogs}) => {
    return (
        <div className="blog-list">
            {
            blogs.map((blodPost: Post) =>
                <div className="blog-preview" key={blodPost.id}>
                    <h2 className="blog-title">{blodPost.title}</h2>
                    <p className="blog-author">Written by {blodPost.author}</p>
                    <p className="postDate">{blodPost.date.toString().substring(0, 15)}</p>
                </div>)
        }
        </div>
    );

}

export default BlogList;