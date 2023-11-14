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
                    <p class='h1 bebas' style={{fontSize:'58px', marginBottom:'0px', lineHeight:'0.9'}}>PASSO A PASSO</p>
                    <span style={{ color: '#fc6004', fontSize: '12.5px', marginTop:'0px', paddingTop:'0px'}}>PARA CONTRATAR CONSULTORIA ONLINE</span>
                </Container>
                <Container>
                    <Row className="FotosPasso">
                        <Col md={4} className="topicosPasso">

                            <Image src={Hand} alt="Hand" style={{ height: '10vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >1. Escolha o plano</h5>
                            <span>30, 90 ou 180 dias de<br/> acompanhamento. <br/>1 planilha para cada 30 dias.</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Card} alt="Card" style={{ height: '10vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >2. Faça o pagamento</h5>
                            <span>Paque com cartão de<br/> crédito à vista<br/> ou parcele em até<br/> 10X (*com acréscimo).</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Form} alt="Form" style={{ height: '10vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >3. Preencha a anamnese</h5>
                            <span>Após a confirmação do<br/> pagamento você<br/> vai receber o questionário<br/> de avaliação física.</span>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row className="FotosPasso">
                        <Col md={4} className="topicosPasso">

                            <Image src={Contrato} alt="Contrato" style={{ height: '10vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >4. Aguarde a planilha</h5>
                            <span>Em até 7 dias após o<br/> recebimento das suas<br/> respostas o seu treino<br/> estará pronto.</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Smart} alt="Smart" style={{ height: '10vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >5. Acesse o app</h5>
                            <span>Enquanto aguarda a planilha<br/> ficar pronta você já terá<br/> acesso a todo o material<br/> disponível no app.</span>
                        </Col>
                        <Col md={4} className="topicosPasso">
                            <Image src={Trofeu} alt="Trofeu" style={{ height: '10vh' }} />
                            <h5 style={{ color: 'white', fontWeight: '700' }} >6. Conte com meu suporte</h5>
                            <span>Estarei a sua disposição<br/> todos os dias da semana<br/> para tirar dúvidas.</span>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>);
}

export default Quinta;