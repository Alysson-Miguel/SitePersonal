import React from "react";
import { Container, Image } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Foto1 from '../../Img/01 - THAINÁ.png';
import Foto2 from '../../Img/02 - THAINÁ.png';
import Foto3 from '../../Img/03 - THAINÁ.png';
import Carousel from 'react-bootstrap/Carousel';
import './OitavaT.css'




const Oitava = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true, // Permite a navegação por arrasto com o mouse
        arrows: true // Remove os botões de navegação
    };
    return (
        <>
            <div className="Resultado">
                <Container className="AjudaTreino">
                    <span style={{ color: '#fc6004', marginTop: '50px', marginBotton:'0px', paddingBottom:'0px', lineHeight:'0.2' }}>CONFIRA OS RESULTADOS DO</span>
                    <p class='h3 bebas' style={{ fontSize: '58px', marginTop:'0px', paddingTop:'0px' }}>TIME EP TEAM</p>
                    <Container className="FotosCarrosel">
                        <Slider {...settings}>
                            <Image src={Foto1} fluid />
                            <Image src={Foto2} fluid/>
                            <Image src={Foto3} fluid/>
                        </Slider>
                    </Container>
                </Container>
            </div >
        </>);
}

export default Oitava;