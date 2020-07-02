import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    BoxHome,
    FoodList,
} from './styles';

function Home () {
    return (
        <>
            <Header />
            <BoxHome>
                <div className="container">
                    <h1>Cadê a comida?</h1>
                    <h3>A plataforma que conecta você ao restaurante mais próximo</h3>

                    <h2>O que você pretende comer?</h2>
                    <FoodList>
                        <li>
                            Comida Caseira
                        </li>
                        <li>
                            Comida Japonesa
                        </li>
                        <li>
                            Carnes
                        </li>
                        <li>
                            Pizza
                        </li>
                        <li>
                            Acarajé
                        </li>
                    </FoodList>
                </div>
            </BoxHome>
            <Footer />
        </>
    );
}

export default Home;