import * as playerBar from '../constant/contants'

const playerBarShowData = (songName,name,imgsrc,time) => {
    return{
        type:playerBar.PLAYERBARSHOWDATA,
        songName,
        name,
        imgsrc,
        time
    }
}

export default playerBarShowData;
