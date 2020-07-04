import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    BoxHome,
    Button
} from './styles';

import Imagem from '../../assets/imagem_tela_inicial.svg';

function Home () {
    return (
        <>
            <Header />
            <BoxHome>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Cadê a comida?</h1>
                            <h3>A plataforma que conecta você ao restaurante mais próximo</h3>

                            <div className="options">
                                <Button to='search-place'>
                                    <span>Buscar local para comer</span>
                                </Button>

                                <Button to='register-place'>
                                    <span>Cadastrar estabelecimento</span>
                                </Button>
                            </div>
                        </div>

                        <div className="col">
                            <img src={Imagem} alt="Cadê a comida?"/>
                        </div>
                    </div>
                </div>
            </BoxHome>
            <Footer />
        </>
    );
}

export default Home;