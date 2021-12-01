import React from 'react';
import posts from '../data/posts.json';

import { useParams } from "react-router-dom";




const BlogPostPage = () => {

    const { blogid } = useParams()

const currentPost =posts.find (() => {
    return posts.id === blogid

})

    return (
        <div>
            <h1>Blogpost</h1>
            <h3>{currentPost.title}</h3>
            <h4>{currentPost.date}</h4>
            <p>{currentPost.content}</p>

        </div>
    );
};

export default BlogPostPage;