import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    BoxHome,
    Button
} from './styles';

function Home () {
    return (
        <>
            <Header />
            <BoxHome>
                <div className="container">
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
            </BoxHome>
            <Footer />
        </>
    );
}

export default Home;