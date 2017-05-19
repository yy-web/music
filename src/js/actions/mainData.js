import * as banner from '../constant/contants'
import {fetchData} from '../common/fetchData'
import getMusicData from '../actions/musicData'
import getSongData from '../actions/songData'
const mainData = (type,url)=>{
    switch(type){
        case 'musicData':
            return fetchData(url,getMusicData)
        case 'songData':
            return fetchData(url,getSongData)
    }
}
export default mainData;

// const mainData = (url)=>{
//     return fetchData(url,getMusicData)
//
// }
// export default mainData;
