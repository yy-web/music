import React from 'react'
import {Link} from 'react-router'
import '../css/playBar_FM.css'
class PlayBarFM extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnFlag: false
        }
    }
    handleEnter() {
        this.setState({btnFlag: true})
    }
    handleLeave() {
        this.setState({btnFlag: false})
    }
    playBarShow() {
        const player = document.querySelector('.player_wrap');
        const playBar = document.querySelector('.playBar_bg');
        player.classList.add('player_hide')
        player.classList.remove('player_show')
        playBar.classList.add('playBar_show')
        playBar.classList.remove('playBar_hide')
        this.setState({btnFlag: true})
    }
    playBarHide() {
        const player = document.querySelector('.player_wrap');
        const playBar = document.querySelector('.playBar_bg');
        player.classList.add('player_show')
        player.classList.remove('player_hide')
        playBar.classList.add('playBar_hide')
        playBar.classList.remove('playBar_show')
        this.setState({btnFlag: false})
    }
    render() {
        return (
            <div className="playerBox_wrap fm">
                <div className='playerBox'>
                    <div className="player_wrap " onMouseEnter={() => {this.handleEnter()}} onMouseLeave={() => {this.handleLeave()}}>
                        <div className="player">
                            <img src="http://p1.music.126.net/afjQwekhKMBiLOOQz56TLA==/7836219371362214.jpg?param=60y60" alt="123"/>
                            <div className="up"></div>
                            <span className="myFont icon_googleplay player_icon"></span>
                        </div>
                        <div className="showBtn" onClick={() => {
                            this.playBarShow()
                        }} style={{
                            display: this.state.btnFlag
                                ? 'block'
                                : 'none'
                        }}>
                            <span className="myFont icon_lock_open"></span>
                        </div>
                    </div>
                    <div className="playBar_bg">
                        <div className="playBar">
                            <div className="playBar_content">
                                <div className="control">
                                    <span className="myFont icon_to_start_2"></span>
                                    <span className="myFont icon_googleplay"></span>
                                    <span className="myFont icon_to_end_2"></span>
                                </div>
                                <div className="play">
                                    <div className="songInfo">
                                        <span className="songName">asdf</span>
                                        <span className="star">123</span>
                                    </div>
                                    <div className="line">
                                        <div className="bar_bg">
                                            <div className="bar">

                                            </div>
                                            <div className="dot"></div>
                                        </div>
                                        <div className="times">
                                            <span>00:00:00</span>
                                            <strong>/</strong>
                                            <span>00:00:00</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="play_type">
                                    <span className="myFont icon_switch"></span>
                                    <Link to="/playerModel"><span className="myFont icon_resize_full"></span></Link>
                                    <span className="myFont icon_menu"></span>
                                </div>
                            </div>
                            <div className="hideBtn" onClick={()=>{this.playBarHide()}}>
                                <span className="myFont icon_lock"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlayBarFM;
