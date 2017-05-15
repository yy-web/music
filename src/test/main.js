import React from 'react'

import TitleBox from '../test/titleBox'
import RecommendMusic from '../test/recommend_music_list'
import SongItem from '../test/song_item'

import '../css/main.css'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            gdData: [],
            songData:[]
        })

    }
    componentDidMount() {
        const that = this
        fetch('http://localhost:8888/personalized').then(function(res) {
            return res.json()
        }).then(function(Data) {
            that.setState({gdData: Data.result})
        })
        fetch('http://localhost:8888/personalized/newsong').then(function(res) {
            return res.json()
        }).then(function(songData) {
            that.setState({songData: songData.result})
        })
    }
    render() {
        let musicDataArr = [];
        this.state.gdData.map(function(item, index) {
            musicDataArr.push(<RecommendMusic gdData={item} key={index}/>)
        })
        if (this.state.gdData.length === 0) {
            musicDataArr = [];
            musicDataArr.push(
                <div key='list' style={{fontSize: '18px',margin: '20px auto'}}>请稍等...</div>
            )
        }
        let songDataArr = [];
        this.state.songData.map(function(item, index) {
            songDataArr.push(<SongItem songData={item} key={index}/>)
        })
        if (this.state.songData.length === 0) {
            songDataArr = [];
            songDataArr.push(
                <div key='list' style={{fontSize: '18px',margin: '20px auto'}}>请稍等...</div>
            )
        }
        return (
            <div className="main w1000">
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
export default Main;
