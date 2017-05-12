import React from 'react'
import '../css/playerModer.css'
import PlayBar from './playBar'
class PlayerModel extends React.Component {
    render() {
        return (
            <div className="player_model_bg">
                <div className="player_model">
                    <div className="model_top">
                        <div className="tool">
                            <div className="tool_item">
                                <span className="myFont"></span>
                                <span>下载</span>
                            </div>
                            <div className="tool_item">
                                <span className="myFont"></span>
                                <span>删除</span>
                            </div>
                            <div className="tool_item">
                                <span className="myFont"></span>
                                <span>清空列表</span>
                            </div>
                        </div>
                        <div className="song_list_box">
                            <table>
                                <thead></thead>
                            </table>
                        </div>
                        <div className="lrc_box"></div>
                    </div>
                    <div className="model_bottom">
                        <PlayBar/>
                    </div>

                </div>
            </div>
        )
    }
}
export default PlayerModel;
