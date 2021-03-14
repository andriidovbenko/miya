import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Table, Image } from 'react-bootstrap'

function Basket() {
    const items = useSelector(state => {
        return state.basketItems;
    })

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
                                        items.map(({ title, price, image }, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td><Image src={ image } rounded fluid/></td>
                                                <td>{title}</td>
                                                <td>1</td>
                                                <td>{price}</td>
                                                <td>{price}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Basket;
