import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import './SegundaT.css';
import FotoPerfil from '../../Img/PERFIL.jpg';
import Nav from 'react-bootstrap/Nav';
import WhatsappB from '../../Img/whatsappB.png';

const Segunda = () => {

    return (
        <Container className="Secao">
            <Row>
                <Col md={5} sm={12}>
                    <Image src={FotoPerfil} alt="FotoPerfil" fluid className="FotoPerfil" />
                    <div className="LinhaTexto1">
                        <p style={{ opacity: '0.5', paddingTop: '10px' }}>Personal trainer registrado no Conselho Regional de Educalçao Física sob o número 014336-G/PE.</p>
                    </div>
                </Col>
                <Col md={7} sm={12} className="d-flex align-items-center justify-content-center">
                    <aside className="Texto">
                        <p style={{ color: '#02b4ef', textTransform: 'uppercase', marginTop: '20px', fontWeight: '400' }}>Sobre mim</p>
                        <h1>Eliebson Pereira</h1>
                        <div className="LinhaTexto2">
                        </div>
                        <p> Como profissional de Educação Física e Treinador, possuo  formação pela Unifbv Wyden e especialização em musculação voltada para hipertrofia e emagrecimento. Minha paixão pela musculação floresceu há mais de uma década, quando  encontrei minha verdadeira vocação nas academias.  No entanto, ao iniciar minha jornada na musculação, cometi diversos equívocos devido à falta de conhecimento sobre  treinamento, o que me fez desperdiçar tempo precioso na busca por aprimorar minha qualidade de vida e, por  consequência, meu físico. </p>

                        <p> Foi a partir dessas experiências que resolvi empenhar-me em adquirir os conhecimentos necessários para alcançar  resultados mais expressivos. Atualmente, meu propósito é compartilhar esse conhecimento adquirido, contribuindo não apenas para o aprimoramento físico, mas também para a saúde das pessoas. Isso é realizado por meio da minha  consultoria, disponível tanto online quanto presencial, visando melhorar e desenvolver não apenas o corpo, mas também a qualidade de vida de cada indivíduo. </p>
                        <Nav>
                            <button className="ButaoDuvidas"><Nav.Link href="https://wa.me/5581987602699" target="self" style={{ color: 'white', fontWeight: '700' }} ><Image src={WhatsappB} /> TIRE SUAS DÚVIDAS</Nav.Link></button>
                        </Nav>
                    </aside>
                </Col>
            </Row>
        </Container >
    );
}

export default Segunda;
