import React from 'react'
import '../css/banner.css'
class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({left: -100, right: 100, pos: -100,transformFlag:true})
    }
    left() {
        this.move()
    }
    right() {
        this.move(this.state.right)
    }
    move(_direction) {
        const bannerBox = document.querySelector('.banner_box');
        if(this.state.transformFlag){

            const direction = _direction
                ? _direction
                : this.state.left
            let movePos = this.state.pos + direction
            bannerBox.style.left = movePos + '%'

            this.setState({pos: movePos,transformFlag : false})
            if (this.state.pos < -100) {
                console.log('stop')
                return
            }
            this.slide();
        }
    }
    componentDidMount() {
        const that = this;
        const bannerBox = document.querySelector('.banner_box');
        bannerBox.addEventListener("webkitTransitionEnd", function() { //动画结束时事件
            console.log('动画结束');
            that.setState({transformFlag : true})
        }, false);
        this.slide()
    }
    slide() {
        const that = this;
        const slide = setTimeout(function() {
            that.left()
            clearTimeout(slide)
        }, 1000)
    }
    render() {
        console.log(`translateX(${100})`);
        return (
            <div className="banner_wrap">
                <div className="banner  w1000">
                    <div className="banner_box">
                        <img src="http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg" alt="123" width="1000px"/>
                        <img src="http://p4.music.126.net/V9-MXz6b2MNhEKjutoDWIg==/7937374441542745.jpg" alt="123" width="1000px"/>
                        <img src="http://p4.music.126.net/CTU5B9R9y3XyYBZXJUXzTg==/2897213141428023.jpg" alt="123" width="1000px"/>
                    </div>
                </div>
                <div className="w1000">
                    <button onClick={() => {
                        this.left()
                    }}>
                        left
                    </button>
                    <button onClick={() => {
                        this.right()
                    }}>right</button>
                </div>

            </div>
        )
    }
}
export default Banner;
