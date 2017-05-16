import React from 'react'
import '../css/banner.css'
class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            left: -100,
            right: 100,
            pos: -100,
            transformFlag:true,
            index : 1
        })
        this.slideTimeId = 0

    }
    left() {
        if(this.state.transformFlag){
          console.log('left')
          let index = this.state.index;
          index++;
          if(index > this.props.bannerArr.length - 1){
            index = 0
          }
          this.setState({
              index:index
          },function(){
              this.move()
          })
      }

    }
    right() {
        if(this.state.transformFlag){
          console.log('right')
          clearTimeout(this.slideTimeId)
          let index = this.state.index;
          index--;
          if(index < 0){
            index = this.props.bannerArr.length - 1
          }
          this.setState({
              index:index
          },function(){
              this.move(this.state.right)
          })
        }

    }
    move(_direction) {
        const bannerBox = document.querySelector('.banner_box');
        bannerBox.classList.remove('resetBannerBox')
            const that = this;
            this.setState({transformFlag : false})
            const direction = _direction
                ? _direction
                : this.state.left
            const img = direction === this.state.left ?  this.img2 : this.img0;
            console.log('moveindex',this.state.index);
            let index = this.state.index

            img.src = this.props.bannerArr[index]
            let movePos = this.state.pos + direction
            bannerBox.style.left = movePos + '%'

            const reset = setTimeout(function(){
                this.img1.src = that.props.bannerArr[index]
                console.log('src',index);
                bannerBox.classList.add('resetBannerBox')
                bannerBox.style.left = -100 + '%';
                clearTimeout(reset)
            },1000)
            this.slide();
    }
    init(){
        const that = this;
        this.img0.src = this.props.bannerArr[0];
        this.img1.src = this.props.bannerArr[1];
        this.img2.src = this.props.bannerArr[2];
        const bannerBox = document.querySelector('.banner_box');
        bannerBox.addEventListener("webkitTransitionEnd", function() { //动画结束时事件
            console.log('动画结束');
            that.setState({transformFlag : true})
        }, false);
        this.slide()
    }
    slide() {
        const that = this;
        this.slideTimeId = setTimeout(function() {
            that.left()
        }, 2000)
    }
    componentDidMount() {
        this.img0 =  document.getElementById('img0');
        this.img1 = document.getElementById('img1');
        this.img2 = document.getElementById('img2');

        this.init();
    }

    render() {
        console.log('moveindexrender',this.state.index);
        return (
            <div className="banner_wrap">
                <div className="banner  w1000">
                    <div className="banner_box">
                        <img id="img0" src="" alt="123" width="1000px"/>
                        <img id="img1" src="" alt="123" width="1000px"/>
                        <img id="img2" src="" alt="123" width="1000px"/>
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
