import React from 'react'
import '../css/recommend_music_list.css'
class RecommendMusic extends React.Component {
    
    render() {
        return (
            <div className="m_list_item scale">
                <img  src={this.props.gdData.picUrl} alt="recommend_m_list"/>
                <div className="item_info">
                    <div className="infoBox">
                        <div style={{width: '85%'}}>
                            <p className="name ell">{this.props.gdData.name}</p>
                            <p className="copywriter ell">{this.props.gdData.copywriter}</p>
                        </div>
                        <span className="myFont icon_googleplay play"></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default RecommendMusic;
