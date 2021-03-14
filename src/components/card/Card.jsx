import React from 'react';
import PropTypes from 'prop-types';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

const Card = ({ item, onAddToBasket }) => {
    return (
        <BootstrapCard>
            <BootstrapCard.Img variant="top" src={ item.image } />
            <BootstrapCard.Body>
                <BootstrapCard.Title>{ item.title }</BootstrapCard.Title>
                <BootstrapCard.Text>
                    <b>Верхні ноти:</b>
                    <br/>
                    { item.description.up }
                    <br/>
                    <b>Ноти серця:</b>
                    <br/>
                    { item.description.mid }
                    <br/>
                    <b>Базові ноти:</b>
                    <br/>
                    { item.description.base }
                    <br/>
                </BootstrapCard.Text>
                <Button variant="primary" onClick={ () => onAddToBasket(item) }>Обрати</Button>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object,
    onAddToBasket: PropTypes.func
}
