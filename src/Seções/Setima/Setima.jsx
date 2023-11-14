import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap"
import Preco1PRE from "../../Img/PRECO1PRE.png";
import Preco2PRE from "../../Img/PRECO2PRE.png";
import Image from "react-bootstrap/Image";
import './SetimaT.css'
const Setima = () => {
    return (
        <>
            <Container>
                <Container className="PlanosPresencial">
                    <h1 className="bebas">PLANOS PRESENCIAL</h1>
                    <div className="LinhaTreino"></div>
                </Container>
                <Container className="PlanosPresencial">
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} lg={4} className="text-center">
                            <Image src={Preco2PRE} fluid />
                        </Col>
                        <Col xs={12} md={6} lg={4} className="text-center">
                            <Image src={Preco1PRE} fluid />
                        </Col>
                    </Row>

                </Container >
            </Container>
        </>
    );
}

export default Setima;