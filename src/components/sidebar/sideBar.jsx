import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import image from '../../image/logo.png';
import './sideBar.css';


export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT US</span>
                <img src={image} alt='' />
                <p>
                    Ewnetegna Testimony is a web application that serves as a factual source of truth to "curious" people as they encounter different doubts and insecurities.
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">

                    {cats.map((c) => (
                        // <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        //  
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
