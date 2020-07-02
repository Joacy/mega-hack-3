import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { Zone } from './styles';

const Dropzone = ({ onFileUploaded }) => {
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const image = acceptedFiles[0];

        const imageUrl = URL.createObjectURL(image);

        setSelectedImageUrl(imageUrl);

        onFileUploaded(image);
    }, [onFileUploaded]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
    });

    return (
        <Zone {...getRootProps()} >
            <input {...getInputProps()} accept="image/*" />
            {
                selectedImageUrl
                    ? <img src={selectedImageUrl} alt="Point thumbnail" />
                    : (
                        <p>
                            <FiUpload size={20} />
                            Imagem do estabelecimento
                        </p>
                    )
            }
        </Zone>
    );
};

export default Dropzone;