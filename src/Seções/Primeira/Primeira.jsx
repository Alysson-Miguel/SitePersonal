import React from "react";
import './PrimeiraT.css';
import '../../Componentes/Navbar/Navbar';
import Navbar from "../../Componentes/Navbar/Navbar";

const PrimeiraT = () => {
    const scrollToSection = () => {
        const section = document.getElementById('Planos'); // Substitua com o ID da seção para a qual desejas rolar

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <section className="secao-com-fundo">
                <Navbar />
                <div className="texto-sobre-imagem">
                    <h4 style={{ fontWeight: '800' }}> AJUDO A CONSTRUIR<br /> SEU FÍSICO ATRAVÉS DA</h4><h1 className="montExtraBold"> MUSCULAÇÃO</h1>
                    <p>Conheça minha consultoria de treinamento, disponível tanto online como presencial, e alcance resultados com <strong>a musculação pura e de verdade.</strong></p>
                    <button onClick={scrollToSection} className="VerPlanos" >VER PLANOS</button>
                </div>
            </section >
        </>
    );
}

export default PrimeiraT;
