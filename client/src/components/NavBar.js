import React, {useContext} from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Container} from 'react-bootstrap'

import {Context} from "../index";
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';


const NavBar = () => {
    const {user} = useContext(Context);

    return(
     
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>
                    КупиДевайс
                </NavLink>
                {user.isAuth ?
                <Nav className="ml-auto">
                    <Button variant="info">Админ-панель</Button>
                    <Button variant="info" className="ml-2">Войти</Button>
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