import { Card, CardColumns, Button, Breadcrumb } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const Alteranative = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => {
        return state.alternativeItems;
    })

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
                    items.map((item) => (
                        <Card>
                            <Card.Img variant="top" src="./101.jpg" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <b>Верхні ноти:</b>
                                    <br/>
                                    {item.description.up}
                                    <br/>
                                    <b>Ноти серця:</b>
                                    <br/>
                                    {item.description.mid}
                                    <br/>
                                    <b>Базові ноти:</b>
                                    <br/>
                                    {item.description.base}
                                    <br/>
                                </Card.Text>
                                <Button variant="primary" onClick={ () => dispatch( { type: 'BASKET/ADD_ITEM', payload: item } ) }>Обрати</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </CardColumns>
        </div>
    );
}

export default Alteranative;