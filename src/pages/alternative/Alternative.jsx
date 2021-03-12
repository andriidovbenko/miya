import { Card, CardColumns, Button, Breadcrumb } from 'react-bootstrap'

const Store = () => {
    const items = [
        {
            title: 'Chanel №5',
            description : {
                up: 'альдегиды, нероли, иланг-иланг',
                mid: 'ирис, жасмин, роза',
                base: 'амбра, сандал, ваниль'
            }
        },
    ];

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
                    [...items, ...items, ...items, ...items, ...items].map(({title, description}) => (
                    <Card>
                        <Card.Img variant="top" src="./101.jpg" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            <b>Верхні ноти:</b>
                            <br/>
                            {description.up}
                            <br/>
                            <b>Ноти серця:</b>
                            <br/>
                            {description.mid}
                            <br/>
                            <b>Базові ноти:</b>
                            <br/>
                            {description.base}
                            <br/>
                            </Card.Text>
                            <Button variant="primary">Обрати</Button>
                        </Card.Body>
                    </Card>
                    ))
                }
            </CardColumns>
        </div>
    );
}

export default Store;