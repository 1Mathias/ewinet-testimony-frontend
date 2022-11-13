
import './home.css';
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sidebar/sideBar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Footer from '../../components/footer/footer';
import HorizontalScrollBar from '../../components/horizontalScroll/horizontallscroll';



export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            console.log(res.data)
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
        </>
    )
}
