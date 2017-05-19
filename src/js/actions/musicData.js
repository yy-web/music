import * as musicdata from '../constant/contants'

const getMusicData = (gdData) =>{
    return{
        type:musicdata.MUSICDATA,
        gdData:gdData
    }
}
export default getMusicData;
