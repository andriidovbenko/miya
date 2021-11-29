import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import * as yup from 'yup';
import { Formik } from 'formik'

const OrderModal = ({ onSubmit, children }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {
        buyerName: '',
        tel: ''
    }

    const phoneRegExp = /^\+380(\s+)?\(?[0-9]{2}\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/;
    const schema = yup.object().shape({
        buyerName: yup.string().required(),
        tel: yup.string().matches(phoneRegExp, 'Phone number is not valid').required()
    })
  
    return (
        <>
            <Button variant="success" onClick={ handleShow }>
                { children }
            </Button>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Введіть Ваші контактні дані</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        validationSchema={ schema }
                        onSubmit={ (values, actions) => {
                            onSubmit(values);
                            actions.resetForm();
                            setShow(false);
                          } }
                        initialValues={ initialValues }
                    >
                        { ({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={ handleSubmit }>
                                <Form.Group>
                                    <Form.Label> Ваше ім&apos;я</Form.Label>
                                    <Form.Control
                                        name="buyerName"
                                        type="text"
                                        placeholder="Тарас Шевченко"
                                        value={ values.buyerName }
                                        onChange={ handleChange }
                                        isValid={ touched.buyerName && !errors.buyerName }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ваш номер телефону</Form.Label>
                                    <Form.Control
                                        name="tel"
                                        type="tel"
                                        placeholder="+380501002085"
                                        value={ values.tel }
                                        onChange={ handleChange }
                                        isValid={ touched.tel && !errors.tel } />
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={ handleClose }>
                                        Відмінити
                                    </Button>
                                    <Button variant="primary" type="submit" disabled={ !isValid }>
                                        Замовити
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OrderModal;