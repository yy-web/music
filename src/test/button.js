import React from 'react'
import '../css/button.css'
class Button extends React.Component {

    render() {
        const value = this.props.value;
        let btn = [];
        if(Array.isArray(value)){
            value.map(function(item,index){
                btn.push(<button className="btn" key={index}>{item}</button>)
            })
        }else{
            btn = <button className="btn">{value}</button>
        }


        return (
            <div className="button_wrap">
                {btn}
            </div>
        )
    }
}
export default Button;
