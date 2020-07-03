import React, { useState, useEffect } from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Dropzone from '../../components/Dropzone';

import { Form } from './styles';

import axios from 'axios';

function RegisterPlace () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const [selectedImage, setSelectedImage] = useState();

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

    return (
        <>
            <Header />
            <div className="container">
                <Form>
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

                        {/* <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker position={selectedPosition} />
                        </Map> */}

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
                            {/* {items.map(item => (
                                <li
                                    key={item.id}
                                    onClick={() => handleSelectItem(item.id)}
                                    className={selectedItems.includes(item.id) ? 'selected' : ''}
                                >
                                    <img src={item.image_url} alt={item.title} />
                                    <span>{item.title}</span>
                                </li>
                            ))} */}
                            <li>
                                <img src="" alt=""/>
                                <span></span>
                            </li>
                            <li>
                                <img src="" alt=""/>
                                <span></span>
                            </li>
                            <li>
                                <img src="" alt=""/>
                                <span></span>
                            </li>
                            <li>
                                <img src="" alt=""/>
                                <span></span>
                            </li>
                            <li>
                                <img src="" alt=""/>
                                <span></span>
                            </li>
                            <li>
                                <img src="" alt=""/>
                                <span></span>
                            </li>
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