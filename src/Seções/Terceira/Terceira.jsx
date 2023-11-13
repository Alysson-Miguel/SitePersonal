import React from "react";
import './TerceiraT.css';
import Image from "react-bootstrap/Image";
import Emagrecimento from '../../Img/PessoasPedalando.png';
import Hipertrofia from '../../Img/Hipertrofia.png';
import DefMuscular from '../../Img/Maquina de academia.png';
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const Terceira = () => {
    return (
        <>
            <div className="Envolver">
                <Container className="AjudaTreino">
                    <p class='h1 bebas' style={{ fontSize: "50px" }}>COMO EU VOU TE AJUDAR</p>
                    <div className="LinhaTreino"></div>
                    <p class='montBold'>Através da minha consultoria de treinamento, você<br />
                        terá a oportunidade de receber treinos personalizados,<br />
                        perfeitamente adaptados aos seus objetivos, disponibilidade e<br />
                        levando em consideração todo seu histórico de treinamento.</p>
                </Container>
                <Container>
                    <Row className="Fotos" style={{ marginBottom: '10px' }}>
                        <Col md={4} className="topicosTreino">

                            <Image src={Emagrecimento} fluid  />
                            {/* <span class='bebas' style={{ backgroundColor: 'white', color: '#02b4ef', width: '100%', textAlign: 'center', fontSize: '30px' }} >EMAGRECIMENTO</span> */}
                        </Col>
                        <Col md={4} className="topicosTreino">

                            <Image src={Hipertrofia} fluid  />
                            {/* <span class='bebas' style={{ backgroundColor: 'white', color: '#02b4ef', width: '100%', textAlign: 'center', fontSize: '30px' }} >HIPERTROFIA</span> */}
                        </Col>
                        <Col md={4} className="topicosTreino">

                            <Image src={DefMuscular} fluid />
                            {/* <span class='bebas' style={{ backgroundColor: 'white', color: '#02b4ef', width: '100%', textAlign: 'center', fontSize: '30px' }} >DEFINIÇÃO MUSCULAR</span> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Terceira;
