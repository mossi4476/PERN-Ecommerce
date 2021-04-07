import React, {useContext} from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Container} from 'react-bootstrap'

import {Context} from "../index";
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

import {useHistory} from 'react-router-dom'



const NavBar = () => {
    const {user} = useContext(Context);
    const history = useHistory();
    return(
     
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>
                    КупиДевайс
                </NavLink>
                {user.isAuth ?
                <Nav className="ml-auto">

                    <Button variant="info" 
                    onClick={() => history.push(ADMIN_ROUTE)}>
                        Админ-панель
                    </Button>

                    <Button variant="info" 
                    className="ml-2"
                     onClick={() => history.push(LOGIN_ROUTE)}>
                         Выйти
                    </Button>

                </Nav>
                :

                <Nav className="ml-auto" >
                    <Button variant="info">Авторизация</Button>
                </Nav>
                }
            </Container>
        </Navbar>
      

  
    )
}

export default NavBar