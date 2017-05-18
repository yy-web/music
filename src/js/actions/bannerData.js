import * as banner from '../constant/contants'

const bannerData = (url)=>{
    return{
        type:banner.BANNERDATA,
        url
    }
}
export default bannerData;
