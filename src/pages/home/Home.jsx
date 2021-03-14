import React from 'react';
import { CardColumns } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import cogoToast from 'cogo-toast';
import { addToBasket } from '../../actions/basket';
import Card from '../../components/card/Card';

function Home() {
    const dispatch = useDispatch()

    const items = useSelector(state => {
        return state.goods.forHome;
    });

    const onAddToBasketClick = (item) => {
        dispatch(addToBasket(item));
        cogoToast.success('Додано до корзини', { position: 'top-right', heading: item.title });
    }

    return (
        <div className="miya-store">
            <CardColumns> 
                {
                    items.map((item) => <Card item={ item } key={ item.id } onAddToBasket={ onAddToBasketClick }/>)
                }
            </CardColumns>
        </div>
    );
}

export default Home;