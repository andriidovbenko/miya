import React from 'react';
import { CardColumns } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast, toastTypes } from '../../utils/toast';
import { addToBasket } from '../../actions/basket';
import Card from '../../components/card/Card';

function Home() {
    const dispatch = useDispatch();

    const items = useSelector(state => {
        return state.goods.data.filter(i => i.type === 'for-home');
    });

    const onAddToBasketClick = (item) => {
        dispatch(addToBasket(item));
        toast(toastTypes.success, item.title)
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