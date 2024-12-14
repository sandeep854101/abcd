import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Card Detail</h1>
            <p>You clicked on the card with title: <strong>{decodeURIComponent(id)}</strong></p>
        </div>
    );
};

export default CardDetail;
