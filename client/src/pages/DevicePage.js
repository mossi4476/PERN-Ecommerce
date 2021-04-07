import React from 'react';

import {Col, Row , Card, Container, Image, Button} from 'react-bootstrap'

import bigStar from '../assets/bigStar.png'

const DevicePage = () => {

    const device = {
        id: 1, name: 'Sumsung', price: 5000, rating: 50, 
        img: 'https://www.ixbt.com/mobile/images/samsung-galaxy-s8-plus/foto/sgs8-0043.jpeg'
    }

    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 гб'},
        {id: 2, title: 'Процессор', description: 'intel core i5'}
    ]

    return(
        <Container className="mt-3 justify-content-start">
            
            <Row className="">
                <Col md={4} className="d-flex justify-content-center">
                    <Image width={300} height={300} src={device.img}/>
                </Col>

                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around" 
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>
                            От {device.price} руб.
                        </h3>

                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                       
                    </Card>
                </Col>

                <Row className="d-flex flex-column m-3">
                    <h1>Характеристики</h1>
                    {description.map((info, index) => 
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title} : {info.description}
                        </Row>
                        )}
                </Row>

            </Row>
        </Container>
    )
}

export default DevicePage;