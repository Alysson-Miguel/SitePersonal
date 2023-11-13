import React from "react";
import './PrimeiraT.css';
import Container from "react-bootstrap/Container";


const PrimeiraT = () => {
    const scrollToSection = () => {
        const section = document.getElementById('Planos'); // Substitua com o ID da seção para a qual desejas rolar

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <Container fluid className="PlanoDeFundo">
                <div className="texto-sobre-imagem">
                    <h1 className='montBold'>AJUDO A CONSTRUIR<br /> SEU FÍSICO ATRAVÉS DA<br /> <p style={{ fontSize: '60px', fontWeight: '900' }}>MUSCULAÇÃO</p></h1>
                    <p>Conheça minha consultoria de treinamento,disponível<br />
                        tanto online como presencial, e alcance resultados com<br />
                        <strong>a musculação pura e de verdade.</strong></p>
                    <button onClick={scrollToSection} className="VerPlanos">VER PLANOS</button>
                </div>
            </Container>
        </>
    );
}

export default PrimeiraT;
