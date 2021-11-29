import React from 'react';
import PropTypes from 'prop-types';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

const Card = ({ item, onAddToBasket }) => {
    console.log(item.image)
    return (
        <BootstrapCard>
            <BootstrapCard.Img variant="top" src={ 'http://localhost:3000/goods/image/' + item._id } />
            <BootstrapCard.Body>
                <BootstrapCard.Title>{ item.title }</BootstrapCard.Title>
                <BootstrapCard.Text>
                    { item.description.up && (
                        <>
                            <b>Верхні ноти:</b>
                            <br/>
                            { item.description.up }
                            <br/>
                        </>)
                    }
                    { item.description.mid && (
                        <>
                            <b>Ноти серця:</b>
                            <br/>
                            { item.description.mid }
                            <br/>
                        </>)
                    }
                    { item.description.base && (
                        <>
                            <b>Базові ноти:</b>
                            <br/>
                            { item.description.base }
                            <br/>
                        </>)
                    } 
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
