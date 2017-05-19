import {combineReducers} from 'redux';

import playerBarShowDataReducers from '../reducers/playerBarShowData'
import bannerDataReducer from '../reducers/bannerData'
import mainDataReducer from '../reducers/mainData'


const stores = combineReducers({
    playerBarState:playerBarShowDataReducers,
    bannerState:bannerDataReducer,
    mainState : mainDataReducer
})

export default stores;
