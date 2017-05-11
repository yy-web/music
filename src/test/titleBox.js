import React from 'react'
import '../css/titleBox.css'
class TitleBox extends React.Component {
    render() {
        return (
            <div className="title_box">
                <span className='title'>{this.props.title}</span>
                <span className="more" style={{display:this.props.more ? 'inline-block' : 'none'}}>更多</span>
            </div>
        )
    }
}
export default TitleBox;
