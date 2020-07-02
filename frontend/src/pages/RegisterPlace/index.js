import React, { useState, useEffect } from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Dropzone from '../../components/Dropzone';

import { Form } from './styles';

function RegisterPlace () {
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

    return (
        <>
            <Header />
            <div className="container">
                <Form>
                    <h1>Cadastro do estabelecimento</h1>

                    <Dropzone onFileUploaded={setSelectedImage} />

                    {/* <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={selectedPosition} />
                    </Map> */}
                </Form>
            </div>
            <Footer />
        </>
    );
}

export default RegisterPlace;