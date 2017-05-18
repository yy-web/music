import React from 'react'
import '../css/banner.css'
class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({left: -100, right: 100, pos: -100, transformFlag: true, index: 1})
        this.slideTimeId = 0;
        this.bannerArrs = []

    }
    // left() {
    //     if (this.state.transformFlag) {
    //         clearTimeout(this.slideTimeId)
    //         let index = this.state.index;
    //         index++;
    //         index = index > this.props.bannerArr.length - 1 ? 0 : index
    //         this.setState({
    //             index: index
    //         }, function() {
    //             this.move()
    //         })
    //     }
    // }
    // right() {
    //     if (this.state.transformFlag) {
    //         clearTimeout(this.slideTimeId)
    //         let index = this.state.index;
    //         index--;
    //         index = index < 0 ? this.props.bannerArr.length - 1 : index
    //         this.setState({
    //             index: index
    //         }, function() {
    //             this.move(this.state.right)
    //         })
    //     }
    // }
    direction(e){
        let direction = e && e.currentTarget.dataset.direction;
        direction = direction === undefined ? 'left' : direction;
        if (this.state.transformFlag) {
            clearTimeout(this.slideTimeId)
            let index = this.state.index;
            if(direction === 'left'){
                index++;
                index = index > this.props.bannerArr.length - 1 ? 0 : index;
            }else{
                index--;
                index = index < 0 ? this.props.bannerArr.length - 1 : index;
            }
            let state = direction === 'left' ? this.state.left : this.state.right
            this.setState({
                index: index
            }, function() {
                this.move(state)
            })
        }
    }
    move(_direction) {
        const that = this;
        const bannerBox = document.querySelector('.banner_box');
        const direction = _direction? _direction: this.state.left;
        let movePos = this.state.pos + direction;
        const img = direction === this.state.left? this.img2: this.img0;
        bannerBox.classList.remove('resetBannerBox')
        this.setState({transformFlag: false})
        img.src = this.props.bannerArr[this.state.index].pic
        bannerBox.style.left = movePos + '%'
        const reset = setTimeout(function() {
            this.img1.src = that.props.bannerArr[that.state.index].pic
            bannerBox.classList.add('resetBannerBox')
            bannerBox.style.left = -100 + '%';
            clearTimeout(reset)
        }, 1000)
        this.slide();
    }
    init() {
        console.log(123123);
        const that = this;
        this.img0.src = this.props.bannerArr[0].pic;
        this.img1.src = this.props.bannerArr[1].pic;
        this.img2.src = this.props.bannerArr[2].pic;
        const bannerBox = document.querySelector('.banner_box');
        bannerBox.addEventListener("webkitTransitionEnd", function() { //动画结束时事件
            that.setState({transformFlag: true})
        }, false);
        this.slide()
    }
    slide() {
        const that = this;
        this.slideTimeId = setTimeout(function() {
            that.direction()
        }, 2000)
    }
    componentDidMount() {
        this.img0 = document.getElementById('img0');
        this.img1 = document.getElementById('img1');
        this.img2 = document.getElementById('img2');
        console.log(this.props.bannerArr);
        this.bannerArrs = this.props.bannerArr
        //this.init();
        console.log('Component');

    }
    render() {
        if(this.props.bannerArr.length === 0){
            this.bannerArrs = [{'pic':''},{'pic':''},{'pic':''}];
        }
        return (
            <div className="banner_wrap">
                <div className="banner  w1000">
                    <div className="banner_box">
                        <img id="img0" src="" alt="123"/>
                        <img id="img1" src="" alt="123"/>
                        <img id="img2" src="" alt="123"/>
                    </div>
                    <div className="arrow">
                        <span className="left">&lt;</span>
                        <span className="right">&gt;</span>
                    </div>
                </div>
                <div className="w1000">
                    {/* <button onClick={() => {this.left()}}>left</button>
                    <button onClick={() => {this.right()}}>right</button> */}
                    <button data-direction="left" onClick={(e) => {this.direction(e)}}>left</button>
                    <button data-direction="right" onClick={(e) => {this.direction(e)}}>right</button>
                </div>
            </div>
        )
    }
}
export default Banner;
