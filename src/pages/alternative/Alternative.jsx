import { CardColumns, Breadcrumb } from 'react-bootstrap';
import cogoToast from 'cogo-toast';
import Card from '../../components/card/Card';
import { useStore } from '../../stores/rootStore'

const Alteranative = () => {
    const store = useStore();
    const items = store.goodsStore.alternative

    const onAddToBasketClick = (item) => {
        console.log('item', item, items)
        store.basketStore.addItem(item)
        cogoToast.success('Додано до корзини', { position: 'top-right', heading: item.title });
    }

    return (
        <div className="miya-store">
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <CardColumns> 
                {
                    items.map((item) =>  <Card item={ item } onAddToBasket={ onAddToBasketClick } key={ item.id } />)
                }
            </CardColumns>
        </div>
    );
}

export default Alteranative;