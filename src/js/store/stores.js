import {combineReducers} from 'redux';

import playerBarShowDataReducers from '../reducers/playerBarShowData'
import bannerDataReducer from '../reducers/bannerData'


const stores = combineReducers({
    playerBarState:playerBarShowDataReducers,
    bannerState:bannerDataReducer

})

export default stores;
