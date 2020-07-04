import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { BoxSearch } from './styles';

import api from '../../services/api';

function SearchPlace () {
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

    const [initialPosition, setInicialPosition] = useState([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setInicialPosition([latitude, longitude]);
        });
    }, []);

    const [points, setPoints] = useState([]);

    async function getPoints () {
        try {
            const response = await api.get('points', {
                params: {
                    // city: routeParams.city,
                    // uf: routeParams.uf,
                    items: selectedItems,
                },
            });

            setPoints(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPoints();
    }, [getPoints, selectedItems]);

    return (
        <>
            <Header />
            <div className="container">
                <BoxSearch>
                    <h3>Selecione o que deseja comer, e mostraremos os locais próximos que fornecem a refeição desejada</h3>

                    <div className="row">
                        <div className="col">
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
                        </div>
                        <div className="col">
                            <Map center={initialPosition} zoom={15}>
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                <Marker position={initialPosition} />
                                {points.map(point => (
                                    <Marker
                                        key={point.id}
                                        onClick={() => (point.id)}
                                        position={[point.latitude, point.longitude]}
                                    />
                                ))}
                            </Map>
                        </div>
                    </div>
                </BoxSearch>
            </div>
            <Footer />
        </>
    );
}

export default SearchPlace;