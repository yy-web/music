import { PLAYERBARSHOWDATA } from '../constant/contants'

const initialState = {
    songName:'',
    name:'',
    imgsrc:'',
    time:'00:00:00',
}

const playerBarShowDataReducers = (state = initialState,action) => {
    switch(action.type){
        case PLAYERBARSHOWDATA :
            return Object.assign({},state,{songName:action.songName,name:action.name,imgsrc:action.imgsrc,time:action.time})
        default: return state
    }

}

export default playerBarShowDataReducers;
