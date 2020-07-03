import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Dropzone from '../../components/Dropzone';

import api from '../../services/api';

import { Form } from './styles';

function RegisterPlace () {
    const [items, setItems] = useState([]);

    async function getItems () {
        // try {
        //     const response = await api.get('items');

        //     setItems(response.data);
        // } catch (error) {
        //     console.log(error);
        // }
        setItems([
            {
                id: 1,
                title: "Comida Caseira",
                image_url: "https://via.placeholder.com/80"
            },
            {
                id: 2,
                title: "Comida Japonesa",
                image_url: "https://via.placeholder.com/80"
            },
            {
                id: 3,
                title: "Carnes",
                image_url: "https://via.placeholder.com/80"
            },
            {
                id: 4,
                title: "Pizza",
                image_url: "https://via.placeholder.com/80"
            },
            {
                id: 5,
                title: "Açaí",
                image_url: "https://via.placeholder.com/80"
            },
            {
                id: 6,
                title: "Acarajé",
                image_url: "https://via.placeholder.com/80"
            }
        ])
    };

    useEffect(() => {
        getItems();
    }, []);

    const [ufs, setUfs] = useState([]);

    async function getUFs () {
        try {
            const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");

            const initials = response.data.map(uf => uf.sigla);

            setUfs(initials);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUFs();
    }, []);

    const [selectedUF, setSelectedUF] = useState('0');

    function handleSelectUF (e) {
        setSelectedUF(e.target.value);
    };

    const [selectedCity, setSelectedCity] = useState('0');

    function handleSelectCity (e) {
        setSelectedCity(e.target.value);
    };

    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (selectedUF === '0') {
            return;
        }

        axios
            .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`)
            .then(response => {
                const names = response.data.map(city => city.nome);

                setCities(names);
            });
    }, [selectedUF]);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const [selectedImage, setSelectedImage] = useState();

    const [initialPosition, setInicialPosition] = useState([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInicialPosition([latitude, longitude]);
        });
    }, []);

    const [selectedPosition, setSelectedPosition] = useState([0, 0]);

    function handleMapClick (e) {
        setSelectedPosition([
            e.latlng.lat,
            e.latlng.lng
        ]);
    };

    const [selectedItems, setSelectedItems] = useState([]);

    function handleSelectItem (id) {
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    }

    const history = useHistory();

    async function handleSubmit (e) {
        e.preventDefault();

        const uf = selectedUF;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const items = selectedItems;

        const data = new FormData();

        data.append('name', name);
        data.append('email', email);
        data.append('whatsapp', whatsapp);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('city', city);
        data.append('uf', uf);
        data.append('items', items.join(','));

        if (selectedImage) {
            data.append('image', selectedImage);
        }

        try {
            await api.post('points', data);

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <Form onSubmit={handleSubmit}>
                    <h1>Cadastro do estabelecimento</h1>

                    <Dropzone onFileUploaded={setSelectedImage} />

                    <fieldset>
                        <legend>
                            <h2>Dados</h2>
                        </legend>

                        <div className="field">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="whatsapp">Whatsapp</label>
                                <input
                                    type="text"
                                    name="whatsapp"
                                    id="whatsapp"
                                    value={whatsapp}
                                    onChange={e => setWhatsapp(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Endereço</h2>
                            <span>Selecione o endereço no mapa</span>
                        </legend>

                        <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker position={selectedPosition} />
                        </Map>

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="uf">Estado (UF)</label>
                                <select
                                    name="uf"
                                    id="uf"
                                    value={selectedUF}
                                    onChange={handleSelectUF}
                                >
                                    <option value="0">Selecione uma UF</option>
                                    {ufs.map(uf => (
                                        <option key={uf} value={uf}>{uf}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <select
                                    name="city"
                                    id="city"
                                    value={selectedCity}
                                    onChange={handleSelectCity}
                                >
                                    <option value="0">Selecione uma Cidade</option>
                                    {cities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Alimentos no cardápio</h2>
                            <span>Selecione um ou mais itens abaixo</span>
                        </legend>

                        <ul className="items-grid">
                            {items.map(item => (
                                <li
                                    key={item.id}
                                    onClick={() => handleSelectItem(item.id)}
                                    className={selectedItems.includes(item.id) ? 'selected' : ''}
                                >
                                    <img src={item.image_url} alt={item.title} />
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </fieldset>

                    <button type="submit">Cadastrar estabelecimento</button>
                </Form>
            </div>
            <Footer />
        </>
    );
}

export default RegisterPlace;