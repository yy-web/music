import {MUSICDATA,SONGDATA} from '../constant/contants'

const initialState = {
    gdData:[],
    songData:[]
}

const mainDataReducer = (state = initialState,action) =>{
    switch(action.type){
        case MUSICDATA :
            return Object.assign({},state,{gdData:action.gdData})
        case SONGDATA :
            return Object.assign({},state,{songData:action.songData})
        default:return state
    }
}

export default mainDataReducer;
