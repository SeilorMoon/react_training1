import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = function (props) {


    let posts = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    return (
        <div>
            {posts}
            <Post/>
        </div>

    );
}

export default MyPosts;