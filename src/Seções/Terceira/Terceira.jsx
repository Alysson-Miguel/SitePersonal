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
                    <h2>COMO EU VOU TE AJUDAR</h2>
                    <div className="LinhaTreino"></div>
                    <p>Através da minha consultoria de treinamento, você<br />
                        terá a oportunidade de receber treinos personalizados,<br />
                        perfeitamente adaptados aos seus objetivos, disponibilidade e<br />
                        levando em consideração todo seu histórico de treinamento.</p>
                </Container>
                <Container>
                    <Row className="Fotos">
                        <Col md={4} className="topicosTreino">

                            <Image src={Emagrecimento} fluid alt='Emagrecimento' />
                            <span style={{ backgroundColor: 'white', color: '#02b4ef', width: '100%', textAlign: 'center', fontWeight: '700', marginBottom: '10px' }} >EMAGRECIMENTO</span>
                        </Col>
                        <Col md={4} className="topicosTreino">

                            <Image src={Hipertrofia} fluid alt='Hipertrofia' />
                            <span style={{ backgroundColor: 'white', color: '#02b4ef', width: '100%', textAlign: 'center', fontWeight: '700', marginBottom: '10px' }}>HIPERTROFIA</span>
                        </Col>
                        <Col md={4} className="topicosTreino">

                            <Image src={DefMuscular} fluid alt='DefMuscular' />
                            <span style={{ backgroundColor: 'white', color: '#02b4ef', width: '100%', textAlign: 'center', fontWeight: '700', marginBottom: '10px' }}>DEFINIÇÃO MUSCULAR</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Terceira;
