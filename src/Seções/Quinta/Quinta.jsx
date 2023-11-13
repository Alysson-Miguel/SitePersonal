import { Container, Image } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap'
import Hand from '../../Img/hanclick.png';
import Card from '../../Img/Card.png';
import Form from '../../Img/Form.png';
import Contrato from '../../Img/contrato.png'
import Smart from '../../Img/celular.png';
import Trofeu from '../../Img/trofeu.png';
import React from "react";
import './QuintaT.css'

const Quinta = () => {
    return (
        <>
            <div className="BackPasso">
                <Container className="TituloPasso">
                    <h1>PASSO A PASSO</h1>
                    <span style={{ color: '#fc6004', fontSize: '15.5px' }}>PARA CONTRATAR CONSULTORIA ONLINE</span>
                </Container>
                <Container>
                    <Row className="FotosPasso">
                        <Col md={4} className="topicosPasso">

                            <Image src={Hand} alt="Hand" style={{ height: '12vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >1. Escolha o plano</h5>
                            <span>30,90 ou 180 dias de acompanhamento. 1 planilha para cada 30 dias.</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Card} alt="Card" style={{ height: '12vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >2. Faça o pagamento</h5>
                            <span>Paque com cartão de crédito à vista ou parcele em até 6 vezes.</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Form} alt="Form" style={{ height: '12vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >3. Preencha a anamnese</h5>
                            <span>Após a confirmação do pagamento você vai receber o questionário de avaliação física.</span>
                        </Col>
                    </Row>

                    <Row className="FotosPasso">
                        <Col md={4} className="topicosPasso">

                            <Image src={Contrato} alt="Contrato" style={{ height: '12vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >4. Aguarde a planilha</h5>
                            <span>Em até 7 dias após o recebimento das suas respostas o seu treino estará pronto.</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Smart} alt="Smart" style={{ height: '12vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >5. Acesse o app</h5>
                            <span>Enquanto aguarda a planilha ficar pronta você já terá acesso a todo o material disponível no app.</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Trofeu} alt="Trofeu" style={{ height: '12vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >6. Conte com o meu suporte</h5>
                            <span>estarei a sua disposição todos os dias da semana para tirar dúvidas.</span>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>);
}

export default Quinta;