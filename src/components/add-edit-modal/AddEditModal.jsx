import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import * as yup from 'yup';
import { Formik } from 'formik'

const AddEditModal = ({ onSubmit, children, initialValues, variant }) => {
    const [show, setShow] = useState(false);
    console.log(initialValues);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        title: yup.string().required(),
        price: yup.number().required(),
        image: yup.string(),
        base: yup.string(),
        up: yup.string(),
        mid: yup.string(),
        type: yup.string().oneOf(['alternative', 'for-home'])
    });
  
    return (
        <>
            <Button variant={ variant } onClick={ handleShow }>
                { children }
            </Button>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        validationSchema={ schema }
                        onSubmit={ (values, actions) => {
                            let data = new FormData();
                            for(let key in values) {
                               data.append(key, values[key])
                            }
                            console.log({values, actions, data})
                            onSubmit(data);
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
                                    <Form.Label>Назва парфумів</Form.Label>
                                    <Form.Control name="title" type="text" placeholder="Chanel №5" value={ values.title } onChange={ handleChange } isValid={ touched.title && !errors.title }/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Зображення</Form.Label>
                                    <Form.Control
                                        name="image"
                                        type="file"
                                        onChange={ (event) => {
                                            setFieldValue('image', event.target.files[0])
                                        } }
                                        isValid={ touched.image && !errors.image } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ціна, грн</Form.Label>
                                    <Form.Control name="price" type="number" placeholder="250" value={ values.price } onChange={ handleChange } isValid={ touched.price && !errors.price } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Базові ноти</Form.Label>
                                    <Form.Control name="base" type="text" value={ values.base } onChange={ handleChange } isValid={ touched.base && !errors.base } />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Верхні ноти</Form.Label>
                                    <Form.Control name="up" type="text" value={ values.up } onChange={ handleChange } isValid={ touched.up && !errors.up }/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Середні ноти</Form.Label>
                                    <Form.Control name="mid" type="text" value={ values.mid } onChange={ handleChange } isValid={ touched.mid && !errors.mid }/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Тип</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                        name="type"
                                        onChange={ handleChange }
                                        isValid={ touched.type && !errors.type }
                                    >
                                        <option value="alternative">Альтернатива</option>
                                        <option value="for-home">Для дому</option>
                                    </Form.Control>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={ handleClose }>
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit" disabled={ !isValid }>
                                        Save Changes
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

export default AddEditModal;
