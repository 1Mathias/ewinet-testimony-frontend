
import './home.css';
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sidebar/sideBar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

import Footer from '../../components/footer/footer';
import HorizontalScrollBar from '../../components/horizontalScroll/horizontallscroll';

import image from "../../image/grad_in_phone.png"



export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        }
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <SideBar />
                
            </div>
            {/* <HorizontalScrollBar /> */}
            <Footer />


            </div>
            <iframe width="500" height="500" src="https://www.youtube.com/embed/LelifxOrzvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <section class="about" id="about">
                <h1 class="heading">About the Platform</h1>

                <div class="column">
                    <div class="image">
                        <img src={image} alt="grad magazine promo" />
                    </div>

                    <div class="content">
                        <h3>Easy And Perfect Platform for your Grad Memories</h3>
                        <p>
                            The Lighter and the more Attractive us we make the Graduation
                            becomes unforgettable and memorable
                        </p>
                        <div class="buttons">
                            <a class="btn"> <i class="fab fa-apple"></i> App store </a>
                            <a class="btn">
                                <i class="fab fa-google-play"></i> Get Started</a
                            >
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
