import React from 'react';
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate'; // recommend
import './post.css';

export default function Post({ post }) {
    return (
        <div className='post'>
            {
                <a className='border'>
                    <img className="postImg" src="http://themes.pcubelive.com/pcubeblog/images/b3.jpg" alt='' />
                </a>
            }
            <div className='postInfo'>
                <div className='postCats'>
                    {post.categories.map(c => {
                        <span className='postCat'>{c.name}</span>
                    })}
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
            <TextTruncate
                line={3}
                element="span"
                truncateText="…"
                text={post.desc}
                textTruncateChild={<div href="#" className='read-more'><a>Read on</a></div>}
            />
                
            </p>
        </div>
    )
}
