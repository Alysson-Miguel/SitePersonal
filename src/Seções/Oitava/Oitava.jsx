import React from "react";
import { Container, Image } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Foto1 from '../../Img/01 - THAINÁ.png';
import Foto2 from '../../Img/02 - THAINÁ.png';
import Foto3 from '../../Img/03 - THAINÁ.png';
import './OitavaT.css'




const Oitava = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true, // Permite a navegação por arrasto com o mouse
        arrows: false // Remove os botões de navegação
    };
    return (
        <>
            <div className="Resultado">
                <Container className="AjudaTreino">
                    <span style={{ color: '#fc6004', marginTop: '50px', fontWeight: '700' }}>CONFIRA OS RESULTADOS DO</span>
                    <h2 style={{ fontWeight: '800' }}>TIME EP TEAM</h2>
                    <Container className="FotosCarrosel">
                        <Slider {...settings}>
                            <Image src={Foto1} alt='Foto1' />
                            <Image src={Foto2} alt='Foto2' />
                            <Image src={Foto3} alt='Foto2' />
                        </Slider>
                    </Container>
                </Container>
            </div >
        </>);
}

export default Oitava;