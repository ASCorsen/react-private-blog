import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
const BlogOverview = () => {


    function BlogPost() {

    }


    return (
        <div>
           <h1>Blog overview</h1>
           <p>Aantal Blogposts {posts.length} </p>
            <ul>
                {posts.map((overview) => {
                    return <li key={overview.id}>
                        <Link to={`/blogposts/${overview.id}`}>
                            {overview.title}
                        </Link>
                    </li>

                })}
            </ul>

        </div>
    );
};

export default BlogOverview;