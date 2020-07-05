import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { BoxDetail } from './styles';

import api from '../../services/api';

class DetailPlace extends Component {
    state = {
        point: {},
        items: [],
    }

    async componentDidMount () {
        const { id } = this.props.match.params;
        console.log(id);

        try {
            const response = await api.get(`points/${id}`);

            this.setState({ point: response.data.point });
            this.setState({ items: response.data.items });
        } catch (error) {
            alert("Erro ao obter os dados");
        }
    }

    render () {
        const { point, items } = this.state;

        return (
            <>
                <Header />
                <div className="container">
                    <BoxDetail>
                        <h1>{point.name}</h1>

                        <img src={point.image_url} alt="" />

                        <h3>{point.description}</h3>

                        <h3>{point.city}, {point.uf}</h3>

                        <h4>Entre em contato conosco, faça um pedido!</h4>

                        <a
                            hrefLang
                            href={"https://api.whatsapp.com/send?1=pt_BR&phone=" + point.whatsapp}
                            target="_blank"
                        >
                            <span>Entrar em contato</span>
                        </a>
                    </BoxDetail>
                </div>
                <Footer />
            </>
        );
    }
}

export default DetailPlace;