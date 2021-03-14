import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Table, Image, Button } from 'react-bootstrap'
import { BsTrash as TrashIcon } from 'react-icons/bs';
import cogoToast from 'cogo-toast';
import { deleteBasketItem } from '../../actions/basket';

const Basket = () => {
    const dispatch = useDispatch()

    const items = useSelector(state => {
        return state.basketItems;
    })

    const getSum = () => {
        let sum = 0;
        items.forEach(item => sum = sum + item.price * item.amount);
        return sum;
    }

    const onDeleteButtonClick = (id, title) => {
        dispatch(deleteBasketItem(id));
        cogoToast.warn('Видалено', { position: 'top-right', heading: title });
    }

    return (
        <div className="miya-basket">
            {
                !items.length ? (
                    <p>У Вас покищо немає замовлень :)</p>
                ) : (
                    <>
                        <h2>Ваше замовелення:</h2>
                        <div className="oreder-list">
                            <Table striped bordered  hover size="m">
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Зображення</th>
                                        <th>Назва</th>
                                        <th>Кількість</th>
                                        <th>Ціна</th>
                                        <th>Cума</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map(({ title, price, image, amount, id }, i) => (
                                            <tr key={ id }>
                                                <td>{i + 1}</td>
                                                <td><Image src={ image } rounded fluid/></td>
                                                <td>{title}</td>
                                                <td>{amount}</td>
                                                <td>{price}</td>
                                                <td>{amount * price}</td>
                                                <td>
                                                    <Button onClick={ () => onDeleteButtonClick(id, title) }>
                                                        <TrashIcon />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <p>До оплати: <b>{ getSum() } грн</b></p>
                    </>
                )
            }
        </div>
    );
}

export default Basket;
