import React from 'react'
import '../css/playBar.css'
class PlayBar extends React.Component {
    render() {
        return (
            <div className='playBar'>
            {/*<div className="showBtn">
                <span className="myFont icon_lock_open"></span>
            </div>*/}
            <div className="playBar_content_bg md">
                <div className="playBar_content w1000">
                    <div className="control">
                        <span className="myFont icon_to_start_2"></span>
                        <span className="myFont icon_googleplay"></span>
                        <span className="myFont icon_to_end_2"></span>
                    </div>
                    <div className="play">
                        <div>
                            <img src="http://p1.music.126.net/afjQwekhKMBiLOOQz56TLA==/7836219371362214.jpg?param=34y34" alt='123'/>
                        </div>
                        <div className="songInfo">
                            <span className="songName">asdf</span>
                            <span className="star">123</span>
                        </div>
                        <div className="bar_bg">
                            <div className="bar">
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className="times">
                            <span>00:00:00</span>
                            <strong>/</strong>
                            <span>00:00:00</span>
                        </div>
                        <div className="play_type">
                            <span className="myFont icon_switch"></span>
                            <span className="myFont icon_resize_full"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
export default PlayBar;
