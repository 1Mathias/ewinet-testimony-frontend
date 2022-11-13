import React from 'react';
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate'; // recommend
import './post.css';

export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";
    return (
        <div className='post'>


            {post.photo &&
                <img className="postImg" src={PF + post.photo} alt='' />
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
            <Link to={`/post/${post._id}`} className='link'>
                <p className="postDesc">
                    <TextTruncate
                        line={3}
                        element="span"
                        truncateText="…"
                        text={post.desc}
                        textTruncateChild={<div href="#" className='read-more'><a>Read on</a></div>}
                    />

                </p>
            </Link>
        </div>
    )
}
