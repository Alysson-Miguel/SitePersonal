import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import './SegundaT.css';
import FotoPerfil from '../../Img/Logo.png'; //foto perfil da pessoa retirada e substituida pelo logo da empresa
import Nav from 'react-bootstrap/Nav';
import WhatsappB from '../../Img/whatsappB.png';

const Segunda = () => {

    return (
        <Container className="Secao">
            <Row>
                <Col md={5} sm={12} className=" align-items-center justify-content-center">
                    <Image src={FotoPerfil} className="FotoPerfil" fluid/>
                    <div className="LinhaTexto1">
                        <span>Personal trainer registrado no Conselho Regional de Educalçao Física sob o número ########</span>
                    </div>
                </Col>
                <Col md={7} sm={12} >
                    <aside className="Texto">
                        <h5 >Sobre mim</h5>
                        <h1>Nome</h1>
                        <div className="LinhaTexto2">
                        </div>
                        <p > Como profissional de Educação Física e Treinador, possuo  formação pela Unifbv Wyden e especialização em musculação voltada para hipertrofia e emagrecimento.
                            Minha paixão pela musculação floresceu há mais de uma década, quando  encontrei minha verdadeira vocação nas academias.
                            No entanto, ao iniciar minha jornada na musculação, cometi diversos equívocos devido à falta de conhecimento sobre  treinamento, o que me fez desperdiçar tempo precioso na busca por aprimorar minha qualidade de vida e, por  consequência, meu físico. </p>
                        <p > Foi a partir dessas experiências que resolvi empenhar-me em adquirir os conhecimentos necessários para alcançar  resultados mais expressivos.
                            Atualmente, meu propósito é compartilhar esse conhecimento adquirido, contribuindo não apenas para o aprimoramento físico, mas também para a saúde das pessoas.
                            Isso é realizado por meio da minha  consultoria, disponível tanto online quanto presencial, visando melhorar e desenvolver não apenas o corpo, mas também a qualidade de vida de cada indivíduo. </p>
                        <Nav>
                            <button className="ButaoDuvidas"><Nav.Link href="https://wa.me/#" target="self" style={{ color: 'white', fontWeight: '700' }} ><Image src={WhatsappB} fluid/> TIRE SUAS DÚVIDAS</Nav.Link></button>
                        </Nav>
                    </aside>
                </Col>
            </Row>
        </Container >
    );
}

export default Segunda;
