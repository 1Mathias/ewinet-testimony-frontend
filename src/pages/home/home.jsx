
import axios from "axios";
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import SideBar from '../../components/sidebar/sideBar';
import api from "../../config/api";
import getrequest from "../../config/api";
import './home.css';



export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get("/posts" + search);

            setPosts(res.data);
        }
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <Container>
                <Row className='home'>
                    <Col>
                        <Posts posts={posts} />
                    </Col>
                    <Col xs lg="2">
                        <SideBar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
