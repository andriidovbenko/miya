import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toast, toastTypes } from '../../utils/toast';
import { Table, Image, Button } from 'react-bootstrap'
import { BsTrash as TrashIcon} from 'react-icons/bs';
import { BiEdit as EditIcon } from 'react-icons/bi';
import { addNewGoodsItem, deleteGoodsItem, updateGoodsItem } from '../../actions/goods'
import AddEditModal from '../../components/add-edit-modal/AddEditModal';

const Admin = () => {
    const dispatch = useDispatch();
    const initialValues = {
        title: '',
        price: 0,
        image: '',
        type: 'alternative',
        base: '',
        up: '',
        mid: ''
    }

    const items = useSelector(state => {
        return state.goods.data;
    });

    const onDeleteButtonClick = (item) => {
        dispatch(
            deleteGoodsItem(item._id,
                () => toast(toastTypes.warn, item.title),
                () => toast(toastTypes.error, item.title)
            )
        );
    }

    const addNewItemHandler = (values) => {
        dispatch(
            addNewGoodsItem(values,
                (item) => toast(toastTypes.success, item.title),
                () => toast(toastTypes.error, values.title)
            )    
        )
    }

    const updateItemHandler = (values, id) => {
        dispatch(updateGoodsItem(values, id,
            (item) => toast(toastTypes.info, item.title),
            () => toast(toastTypes.error, values.title)
        ))
    }

    return (
        <div className="miya-admin">
            <div>
                <AddEditModal initialValues={ initialValues } onSubmit={ addNewItemHandler }>Додати товар</AddEditModal>
            </div>
            {
                !items.length ? (
                    <p>Додайте товари</p>
                ) : (
                    <>
                        <div className="oreder-list">
                            <Table striped bordered  hover size="m">
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Зображення</th>
                                        <th>Назва</th>
                                        <th>Ціна, грн</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map((item, i) => (
                                            <tr key={ item._id }>
                                                <td>{i + 1}</td>
                                                <td><Image src={ 'http://localhost:3000/goods/image/' + item._id } rounded fluid/></td>
                                                <td>{item.title}</td>
                                                <td>{item.price.toFixed(2)}</td>
                                                <td>
                                                    <Button onClick={ () => onDeleteButtonClick(item) }>
                                                        <TrashIcon />
                                                    </Button>
                                                    <AddEditModal
                                                        variant="warning"
                                                        initialValues={ { ...item, ...item.description } }
                                                        onSubmit={ (values) => updateItemHandler(values, item._id) }
                                                    >
                                                        <EditIcon />
                                                    </AddEditModal>
                                                </td>
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

export default Admin;