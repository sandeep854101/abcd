import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardList = () => {
    const navigate = useNavigate();

    const cards = [
        { id: 1, title: 'Card One' },
        { id: 2, title: 'Card Two' },
        { id: 3, title: 'Card Three' },
    ];

    const handleCardClick = (title) => {
        // Navigate to the detail page with the card title as the id
        navigate(`/card/${encodeURIComponent(title)}`);
    };

    return (
        <div className="card-list">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="card"
                    onClick={() => handleCardClick(card.title)}
                    style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', cursor: 'pointer' }}
                >
                    {card.title}
                </div>
            ))}
        </div>
    );
};

export default CardList;
