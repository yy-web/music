import * as songdata from '../constant/contants'

const getSongData = (songData) =>{
    return{
        type:songdata.SONGDATA,
        songData:songData
    }
}
export default getSongData;
