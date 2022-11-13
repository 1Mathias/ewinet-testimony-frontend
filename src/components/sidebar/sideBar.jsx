import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './sideBar.css';
import image from "../../image/logo.jpg"


export default function SideBar() {
    const [cats, setCats] = useState([]);
    const [hashtags, setHashtags] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        const getHashtags = async () => {
            const res = await axios.get("/hashtag");

            setHashtags(res.data);
        }
        getCats();
        getHashtags();
    }, []);

    return (
        <div className="sidebar">
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src={image} alt='' />
                <p>
                    Ewinet Testimony Platform is
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">

                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>&nbsp;
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>HASH TAGS</span>
                <ul className="sidebarList">

                    {hashtags.map((c) => (
                        <li className="sidebarListItem">{c.name}</li>
                    ))}


                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>Follow us</span>
            </div>
            <div className='sidebarSocial'>
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
        </div>
    )
}
