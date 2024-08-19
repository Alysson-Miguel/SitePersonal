import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap"
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import Mit from '../../Img/MitPersonal.png';
import './QuartaT.css';
const Quarta = () => {
    return (
        <>
            <Container className="MitContainer">
                <Row className="justify-content-center">
                    <Col>
                        <div className="Mit">
                            <h1 className="bebas" id="babeFonte" >SEU TREINO SERÁ ENTREGUE EM ALTO NÍVEL</h1>
                            <span style={{ opacity: '0.6' }}>Utilizando toda a tecnologia em <br />benefício dos seus resultados</span><br />
                            <ul className="text-align-left">
                                <li><p class='montBold'><FontAwesomeIcon icon={faCheck} /> Vídeos demonstrativos;</p></li>
                                <li><p class='montBold'><FontAwesomeIcon icon={faCheck} /> Registros de frequência;</p></li>
                                <li><p class='montBold'><FontAwesomeIcon icon={faCheck} /> Material de apoio exclusivo;</p></li>
                                <li><p class='montBold'><FontAwesomeIcon icon={faCheck} /> Acompanhamento no WhatsApp;</p></li>
                                <li><p class='montBold'><FontAwesomeIcon icon={faCheck} /> Compativel com todos os smartphones;</p></li>
                            </ul>
                        </div>
                        <button className="Contratar"><Nav.Link href="https://wa.me/#" target="self">CONTRATAR AGORA</Nav.Link></button>
                    </Col>
                    <Col md={5}>
                        <Image src={Mit} fluid style={{ marginTop: '25px', marginBottom: '50px' }} />
                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default Quarta;