import React from "react";
import { Table, Image } from 'react-bootstrap'

function Basket() {
    const items = [
        {
            title: 'Chanel №5',
            description : {
                up: 'альдегиды, нероли, иланг-иланг',
                mid: 'ирис, жасмин, роза',
                base: 'амбра, сандал, ваниль'
            },
            price: 87
        },
    ];

    return (
        <div className="miya-basket">
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
                        [...items, ...items, ...items, ...items, ...items].map(({title, price}, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td><Image src="./101.jpg" rounded fluid/></td>
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
        </div>
    );
}

export default Basket;
