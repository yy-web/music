import * as banner from '../constant/contants'

const getBannerData = (bannerData) =>{
    return{
        type:banner.BANNERDATA,
        url:bannerData
    }
}
export default getBannerData;
