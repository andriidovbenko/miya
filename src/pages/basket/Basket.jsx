import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Table, Image } from 'react-bootstrap'

const Basket = () => {
    const items = useSelector(state => {
        console.log(state);
        return state.basketItems;
    })

    const getSum = () => {
        let sum = 0;
        items.forEach(item => sum = sum + item.price * item.amount);
        return sum;
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
