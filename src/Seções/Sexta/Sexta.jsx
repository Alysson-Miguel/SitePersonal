import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap"
import './SextaT.css'
const Sexta = () => {
    return (
        <>
            <Container>
                <Container className="Planos" id="Planos">
                    <h2>PLANOS ONLINE</h2>
                    <div className="LinhaTreino"></div>
                </Container>
                <Container>
                    <Row>
                        <Col md={4} className="PlanosValores" style={{ color: 'black', paddingBottom: '40px', paddingTop: '40px' }}>

                            <h1 style={{ color: "#fc6004" }}>180 Dias<br />
                                R$ 960</h1>
                            <ul>
                                <li>6 meses de acompanhamento</li>
                                <li>6 planilhas personalizadas</li>
                                <li>Suporte online todos os dias</li>
                                <li>Treino no app</li>
                                <li>Acesso ao grupo EFTEAM</li>
                            </ul>
                        </Col>

                        <Col md={4} className="PlanosValores" style={{ backgroundColor: '#fc6004', color: 'white', paddingBottom: '40px', paddingTop: '40px' }}>

                            <h1  >90 Dias<br />
                                R$ 480</h1>
                            <ul>
                                <li>3 meses de acompanhamento</li>
                                <li>3 planilhas personalizadas</li>
                                <li>Suporte online todos os dias</li>
                                <li>Treino no app</li>
                                <li>Acesso ao grupo EFTEAM</li>
                            </ul>
                        </Col>
                        <Col md={4} className="PlanosValores" style={{ color: 'black', paddingBottom: '40px', paddingTop: '40px' }}>

                            <h1 style={{ color: "#fc6004" }}>30 Dias<br />
                                R$ 200</h1>
                            <ul>
                                <li>1 mês de acompanhamento</li>
                                <li>1 planilha personalizada</li>
                                <li>Suporte online todos os dias</li>
                                <li>Treino no app</li>
                                <li>Acesso ao grupo EFTEAM</li>
                            </ul>
                        </Col>

                    </Row>

                </Container >
            </Container >
        </>);
}

export default Sexta;