import { useSelector, useDispatch } from 'react-redux';
import { CardColumns, Breadcrumb } from 'react-bootstrap';
import { toast, toastTypes } from '../../utils/toast';
import { addToBasket } from '../../actions/basket';
import Card from '../../components/card/Card';

const Alteranative = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => {
        return state.goods.data.filter(i => i.type === 'alternative');
    })

    const onAddToBasketClick = (item) => {
        dispatch(addToBasket(item));
        toast(toastTypes.success, item.title);
    }

    return (
        <div className="miya-store">
            {
                /*<Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb> */
            }
            <CardColumns> 
                {
                    items.map((item) =>  <Card item={ item } onAddToBasket={ onAddToBasketClick } key={ item.id } />)
                }
            </CardColumns>
        </div>
    );
}

export default Alteranative;