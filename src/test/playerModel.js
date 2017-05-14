import React from 'react'
import '../css/playerModer.css'
import PlayBar from './playBar'
class PlayerModel extends React.Component {
    render() {
        return (
            <div className="player_model_bg">
                <div className="model_header">
                    <span>123</span>
                </div>
                <div className="player_model">

                    <div className="model_top w1000">
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
                            <div className='box_header'>
                                  <ul>
                                      <li>
                                          <span className="checkbox"><input type="checkbox"/></span>
                                          <span className="music">歌曲</span>
                                          <span className="author">歌手</span>
                                          <span className="times">时长</span>
                                      </li>
                                  </ul>
                            </div>
                            <div className="box_content">
                                  <ul>
                                      <li>
                                          <span className="checkbox"><input type="checkbox"/></span>
                                          <span className="music">听海</span>
                                          <span className="author">张惠妹</span>
                                          <span className="times">3:40</span>
                                      </li>
                                      <li>
                                          <span className="checkbox"><input type="checkbox"/></span>
                                          <span className="music">听海</span>
                                          <span className="author">张惠妹</span>
                                          <span className="times">3:40</span>
                                      </li>
                                  </ul>
                            </div>
                        </div>
                        <div className="lrc_box">
                            <p>12312312</p>
                            <p>12312312</p>
                            <p>12312312</p>
                            <p>12312312</p>
                            <p>12312312</p>
                            <p>12312312</p>
                            <p>12312312</p>
                        </div>
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
