//sexta            
import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Preco1ON from "../../Img/PRECO1ON.png";
import Preco2ON from "../../Img/PRECO2ON.png";
import Preco3ON from "../../Img/PRECO3ON.png";

import './SextaT.css'
const Sexta = () => {
    return (
        <>

            <Container>
                <Container className="Planos" id="Planos">
                    <h1 className="bebas">PLANOS ONLINE</h1>
                    <div className="LinhaTreino"></div>
                </Container>
                <Container>
                    <Row>
                        <Col md={4}>

                            <Image src={Preco3ON} fluid />
                        </Col>

                        <Col md={4} >

                            <Image src={Preco2ON} fluid />

                        </Col>
                        <Col md={4}>

                            <Image src={Preco1ON} fluid />
                        </Col>

                    </Row>

                </Container >
            </Container >


        </>);

}

export default Sexta;