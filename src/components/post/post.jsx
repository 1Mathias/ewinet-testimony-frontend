import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import './post.css';


export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";
    return (
        <Card className="post-panel">
            {post && post.photo &&
                <Card.Img className='postimage' variant="top" src={post.photo || 'https://res.cloudinary.com/ramjet-it-solution/image/upload/v1657281849/cld-sample-4.jpg'} alt='' />
            }
            <Card.Body>
                <Link to={`/post/${post._id}`} className="link">
                    <Card.Title>{post.title}</Card.Title></Link>
                <Card.Text className="post-date">{new Date(post.createdAt).toDateString()}</Card.Text>
                <TextTruncate
                    line={3}
                    element="div"
                    truncateText="…"
                    text={post.desc}
                />
                <Link to={`/post/${post._id}`} className="link"><Button variant="info mt-2 text-light">Read More</Button></Link>
            </Card.Body>
        </Card>
    )
}