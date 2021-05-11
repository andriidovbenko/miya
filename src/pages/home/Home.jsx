import React from 'react';
import { CardColumns } from 'react-bootstrap';
import cogoToast from 'cogo-toast';
import Card from '../../components/card/Card';
import { useStore } from '../../stores/rootStore'

function Home() {
    const store = useStore();
    const items = store.goodsStore.forHome

    const onAddToBasketClick = (item) => {
        store.basketStore.addItem(item)
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