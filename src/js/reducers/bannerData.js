import {BANNERDATA} from '../constant/contants'

const initialState = {
    url:''
}

const bannerDataReducer = (state = initialState,action) =>{
    switch(action.type){
        case:BANNERDATA
            return Object.assign({},state,{url:action.url})
        default:return state
    }
}

export default bannerDataReducer;
