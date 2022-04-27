import React from 'react'
import { Container } from 'react-bootstrap'

import CardSlide from '../components/content/CardSlide';
import NavbarUser from '../components/NavbarUser';

// import { Outlet, useNavigate } from 'react-router-dom'
// import { UserContext } from '../context/userContext'

function Home() {

    
    const title = "Home"
    document.title = 'Ways Books | ' + title
    // const navigate = useNavigate();
    // const [, dispatch] = useContext(UserContext);

    // const handleLogout = () => {
    //     dispatch({
    //         type: "logout",
    //     });
    //     navigate('/landing')
    // };
    return (
        <div>
            <Container fluid >
                <NavbarUser />
                <CardSlide />
            </Container >
        </div >
    )
}

export default Home
