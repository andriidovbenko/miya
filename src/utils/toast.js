import cogoToast from 'cogo-toast';

const settings = {
    position: 'top-right'
}

export const toastTypes = {
    success: 'success',
    info: 'info',
    loading: 'loading',
    warn: 'warn',
    error: 'error'
};

const messages = {
    success: 'Додано',
    info: 'Оновлено',
    // loading: 'loading',
    warn: 'Видалено',
    error: 'Сталася помилка'
}

export function toast(type, title, message){
    console.log('title', title);
    const textMessage = message || messages[type];
    return cogoToast[toastTypes[type]](textMessage, { ...settings, heading: title })
}