import React from 'react'

import TitleBox from '../test/titleBox'
import RecommendMusic from '../test/recommend_music_list'
import SongItem from '../test/song_item'

import Banner from '../test/banner'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import mainData from '../js/actions/mainData'
import getBannerData from '../js/actions/bannerData'

import '../css/main.css'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            gdData: [],
            songData:[],
            bannerArr:[]

        })

    }
    componentDidMount() {
        const that = this;
        this.props.mainData('musicData','http://localhost:8888/personalized')
        this.bannerArr = []
        this.props.mainData('songData','http://localhost:8888/personalized/newsong')
        fetch('http://localhost:8888/banner').then(function(res) {
            return res.json()
        }).then(function(picSrc) {
            that.props.bannerData(picSrc.banners)

        })

    }
    render() {
        //console.log(this.props.bannerState);
        let musicDataArr = [];
        this.props.mainState.gdData.map(function(item, index) {
            musicDataArr.push(<RecommendMusic gdData={item} key={index}/>)
        })
        if (this.props.mainState.gdData.length === 0) {
            musicDataArr = [];
            musicDataArr.push(
                <div key='list' style={{fontSize: '18px',margin: '20px auto'}}>请稍等...</div>
            )
        }
        let songDataArr = [];
        this.props.mainState.songData.map(function(item, index) {
            songDataArr.push(<SongItem songData={item} key={index}/>)
        })
        if (this.props.mainState.songData.length === 0) {
            songDataArr = [];
            songDataArr.push(
                <div key='list' style={{fontSize: '18px',margin: '20px auto'}}>请稍等...</div>
            )
        }
        return (

            <div className="main w1000">
                <Banner bannerArr={this.props.bannerState}/>
                <TitleBox title="推荐歌单" more={true}/>
                <div className="recommend_m_list">
                    {musicDataArr}
                </div>
                <TitleBox title="推荐歌曲" more={true}/>
                <div className="recommend_s_list">
                    {songDataArr}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state)  => {
    return{
        mainState:state.mainState,
        bannerState:state.bannerState
    }
}

const mapDipatchToProps = (dispatch) => {
    return{
        mainData:bindActionCreators(mainData,dispatch),
        bannerData:bindActionCreators(getBannerData,dispatch)
    }
}

Main = connect(mapStateToProps,mapDipatchToProps)(Main)
export default Main;
