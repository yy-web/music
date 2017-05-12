import React from 'react'

import TitleBox from '../test/titleBox'

import '../css/main.css'

class Main extends React.Component {
    render() {
        return (
            <div className="main w1000">
                <TitleBox title="推荐歌单" more={true}/>
                <div className="recommend_m_list">
                    <div className="m_list_item scale">
                        <img  src="http://p1.music.126.net/ZSaf93fTR1OC--umy-dpvg==/18714787418286872.jpg" alt="recommend_m_list"/>
                        <div className="item_info">
                            <div className="infoBox">
                                <div style={{width: '100%'}}>
                                    <p className="name ell">123</p>
                                    <p className="copywriter ell">1321323</p>
                                </div>
                                <span className="myFont icon_googleplay play"></span>
                            </div>
                        </div>
                    </div>
                    <div className="m_list_item scale">
                        <img src="http://p1.music.126.net/ZSaf93fTR1OC--umy-dpvg==/18714787418286872.jpg" alt="recommend_m_list"/>
                        <div className="item_info">
                            <div className="infoBox">
                                <div style={{
                                    width: '100%'
                                }}>
                                    <p className="name ell">123</p>
                                    <p className="copywriter ell">1321323</p>
                                </div>
                                <span className="myFont icon_googleplay play"></span>
                            </div>
                        </div>
                    </div>
                    <div className="m_list_item scale">
                        <img src="http://p1.music.126.net/ZSaf93fTR1OC--umy-dpvg==/18714787418286872.jpg" alt="recommend_m_list"/>
                        <div className="item_info">
                            <div className="infoBox">
                                <div style={{width: '100%'}}>
                                    <p className="name ell">123</p>
                                    <p className="copywriter ell">1321323</p>
                                </div>
                                <span className="myFont icon_googleplay play"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <TitleBox title="推荐歌曲" more={true}/>
                <div className="recommend_s_list">
                    <div className="left_list">
                        <div className="s_list_item">
                            <div className="song_info">
                                <span className="song_name">听海</span>
                                <span>-</span>
                                <span className="artists_name">张惠妹</span>
                            </div>
                            <div className="song_icon">
                                <span className="myFont icon_download"></span>
                                <span className="myFont icon_play"></span>
                            </div>
                        </div>
                        <div className="s_list_item">
                            <div className="song_info">
                                <span className="song_name">听海</span>
                                <span>-</span>
                                <span className="artists_name">张惠妹</span>
                            </div>
                            <div className="song_icon">
                                <span className="myFont icon_download"></span>
                                <span className="myFont icon_play"></span>
                            </div>
                        </div>
                        <div className="s_list_item">
                            <div className="song_info">
                                <span className="song_name">听海</span>
                                <span>-</span>
                                <span className="artists_name">张惠妹</span>
                            </div>
                            <div className="song_icon">
                                <span className="myFont icon_download"></span>
                                <span className="myFont icon_play"></span>
                            </div>
                        </div>
                    </div>
                    <div className="right_list">
                        <div className="s_list_item">
                            <div className="song_info">
                                <span className="song_name">听海</span>
                                <span>-</span>
                                <span className="artists_name">张惠妹</span>
                            </div>
                            <div className="song_icon">
                                <span className="myFont icon_download"></span>
                                <span className="myFont icon_play"></span>
                            </div>
                        </div>
                        <div className="s_list_item">
                            <div className="song_info">
                                <span className="song_name">听海</span>
                                <span>-</span>
                                <span className="artists_name">张惠妹</span>
                            </div>
                            <div className="song_icon">
                                <span className="myFont icon_download"></span>
                                <span className="myFont icon_play"></span>
                            </div>
                        </div>
                        <div className="s_list_item">
                            <div className="song_info">
                                <span className="song_name">听海</span>
                                <span>-</span>
                                <span className="artists_name">张惠妹</span>
                            </div>
                            <div className="song_icon">
                                <span className="myFont icon_download"></span>
                                <span className="myFont icon_play"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;
