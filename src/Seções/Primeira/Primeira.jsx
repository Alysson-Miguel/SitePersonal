import React from "react";
import './PrimeiraT.css';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import PlanoDeFundom from "../../Img/background.png"


const PrimeiraT = () => {
    const scrollToSection = () => {
        const section = document.getElementById('Planos'); // Substitua com o ID da seção para a qual desejas rolar

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <section>
                <div>
                    <Image src={PlanoDeFundom} fluid />
                </div>
                <div className="texto-sobre-imagem">
                    <p class='h1'>AJUDO A CONSTRUIR<br /> SEU FÍSICO ATRAVÉS DA<br /> <p style={{ fontSize: '40px', fontWeight: '900' }}>MUSCULAÇÃO</p></p>
                    <p>Conheça minha consultoria de treinamento,disponível<br />
                        tanto online como presencial, e alcance resultados com<br />
                        <strong>a musculação pura e de verdade.</strong></p>
                    <button onClick={scrollToSection} className="VerPlanos">VER PLANOS</button>
                </div>


            </section>
        </>
    );
}

export default PrimeiraT;
