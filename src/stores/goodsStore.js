import { makeAutoObservable } from 'mobx';
import alternativeData from '../initData/alternativeData.json';
import forHomeData from '../initData/forHomeData.json';

class GoodsStore {
    alternative = alternativeData;
    forHome = forHomeData;

    constructor() {
        makeAutoObservable(this);
    }
}

export default GoodsStore;