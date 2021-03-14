import alternativeData from '../initData/alternativeData.json';
import forHomeData from '../initData/forHomeData.json';

const initialState = {
  alternative: alternativeData,
  forHome: forHomeData
};
  
export default function goodsReducer(state = initialState, action) {
  switch (action.type) {
      default:
          return state
  }
};
