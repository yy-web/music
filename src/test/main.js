import React from 'react'

import TitleBox from  '../test/titleBox'


import '../css/main.css'

class Main extends React.Component {
    render() {
        return (
            <div className="main w1000">
                <TitleBox title="推荐歌单" more={true}/>
                <div className="recommend_m_list">
                    <div className="m_list_item">
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
            </div>
        )
    }
}
export default Main;
