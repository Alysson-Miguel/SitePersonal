import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap"
import './SetimaT.css'
const Setima = () => {
    return (
        <>
            <Container>
                <Container className="PlanosPresencial">
                    <h2>PLANOS PRESENCIAIS</h2>
                    <div className="LinhaTreino"></div>
                </Container>
                <Container className="PlanosPresencial">
                    <Row>
                        <Col style={{ color: 'black', paddingBottom: '55px', paddingTop: '50px' }}>

                            <h1 style={{ color: '#fc6004' }} >INDIVIDUAL</h1>
                            <h2 style={{ color: '#fc6004' }}>X5 na semana<br /> R$600</h2>
                            <ul style={{ padding: '15px' }}>
                                <li>Acompanhamento presencial</li>
                                <li style={{ textDecoration: 'line-through', textDecorationColor: '#fc6004' }}>Acompanhamento em Dupla</li>
                                <li>1 planilha personalizada</li>
                                <li>Suporte online todos os dias</li>
                                <li>Treino no app</li>
                                <li>Acesso ao grupo EP TEAM</li>

                            </ul>
                        </Col>
                        <Col style={{ backgroundColor: '#fc6004', color: 'white', paddingBottom: '55px', paddingTop: '50px' }}>

                            <h1  >EM DUPLA</h1>
                            <h2>X5 na semana<br /> R$999</h2>
                            <ul style={{ padding: '15px' }}>
                                <li>Acompanhamento presencial</li>
                                <li>Acompanhamento em Dupla</li>
                                <li>1 planilha personalizada</li>
                                <li>Suporte online todos os dias</li>
                                <li>Treino no app</li>
                                <li>Acesso ao grupo EP TEAM</li>

                            </ul>
                        </Col>

                    </Row>

                </Container >
            </Container>
        </>
    );
}

export default Setima;