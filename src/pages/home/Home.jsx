import React from 'react';
import { Card, CardColumns, Button, Breadcrumb } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket } from '../../actions/basket';

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(state => {
        return state.goods.forHome;
    })

    return (
        <div className="miya-store">
            <CardColumns> 
                {
                    items.map((item) => (
                        <Card>
                            <Card.Img variant="top" src={ item.image } />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
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
                                </Card.Text>
                                <Button variant="primary" onClick={ () => dispatch( addToBasket(item) ) }>Обрати</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </CardColumns>
        </div>
    );
}

export default Home;