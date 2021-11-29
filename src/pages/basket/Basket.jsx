import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Table, Image, Button, InputGroup, FormControl } from 'react-bootstrap'
import { BsTrash as TrashIcon } from 'react-icons/bs';
import { toast, toastTypes } from '../../utils/toast';
import { deleteBasketItem, increaseItemAmount, decreaseItemAmount } from '../../actions/basket';
import { processOreder } from '../../actions/orders';
import OrederModal from '../../components/order-modal/OrderModal';

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
        toast(toastTypes.warn, title)
    }

    const onSubmitHandler = (buyerInfo) => {
        const orderData = {
            buyerInfo,
            orderItems: items.map(({ amount, price, title, type, _id }) => {
                return { amount, price, title, type, _id, sum: amount * price }
            })
        }
        dispatch(processOreder(orderData,
            () => toast(toastTypes.success, 'Замовлення прийнято в роботу', ' '),
            () => toast(toastTypes.error, 'Ой, щось сталося', 'Спробуйте ще раз'),
        ))
    }

    const increaseAmountHandler = id => {
        dispatch(increaseItemAmount(id))
    }

    const decreaseAmountHandler = id => {
        dispatch(decreaseItemAmount(id))
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
                                        <th>Ціна, грн</th>
                                        <th>Cума, грн</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map(({ title, price, amount, _id }, i) => (
                                            <tr key={ _id }>
                                                <td>{i + 1}</td>
                                                <td><Image src={ 'http://localhost:3000/goods/image/' + _id } rounded fluid/></td>
                                                <td>{title}</td>
                                                <td>
                                                    <div className="amount">
                                                        <Button variant="outline-secondary" size="sm" onClick={ () => decreaseAmountHandler(_id) }>-1</Button>
                                                        <FormControl size="sm" value={ amount } disabled />
                                                        <Button variant="outline-secondary" size="sm"onClick={ () => increaseAmountHandler(_id) }>+1</Button>
                                                    </div>
                                                </td>
                                                <td>{price.toFixed(2)}</td>
                                                <td>{(amount * price).toFixed(2)}</td>
                                                <td>
                                                    <Button onClick={ () => onDeleteButtonClick(_id, title) }>
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
                        <OrederModal onSubmit={ onSubmitHandler } >Зробити замовлення</OrederModal>
                    </>
                )
            }
        </div>
    );
}

export default Basket;
