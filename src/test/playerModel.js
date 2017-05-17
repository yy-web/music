import React from 'react'
import '../css/playerModer.css'
import PlayBar from './playBar'
class PlayerModel extends React.Component {
    componentDidMount(){
        this.check = document.getElementsByClassName('check');
    }
    del(){
        const list = document.querySelector('.content_list');
        console.log(typeof (this.check));
        const checkArr = this.check.slice();
        for(let i=0;i<checkArr.length;i++){
            if(checkArr[i].checked){
                console.log(i+"--"+checkArr.length);
                list.removeChild(this.check[i].parentNode.parentNode)
            }
        }
    }
    checkboxAll(){
        for(let i=0;i<this.check.length ; i++){
            if(document.getElementById('all').checked){
                this.check[i].checked = true;
            }else{
                this.check[i].checked = false;
            }
        }
    }
    clear(){
        for(let i=0;i<this.list.childNodes.length;i++){
            console.log(i)
            this.list.removeChild(this.list.childNodes[i]);
        }

    }
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
                                <span>下载</span>
                            </div>
                            <div className="tool_item" onClick={()=> {this.del()}}>
                                <span>删除</span>
                            </div>
                            <div className="tool_item">
                                <span>清空列表</span>
                            </div>
                        </div>
                        <div className="song_list_box">
                            <div className='box_header'>
                                  <ul>
                                      <li>
                                          <span  className="checkbox"><input onClick={()=> {this.checkboxAll()}} id="all" type="checkbox"/></span>
                                          <span className="music">歌曲</span>
                                          <span className="author">歌手</span>
                                          <span className="times">时长</span>
                                      </li>
                                  </ul>
                            </div>
                            <div className="box_content">
                                  <ul className="content_list">
                                      <li>
                                          <span className="checkbox"><input className="check" type="checkbox"/></span>
                                          <span className="music">听海</span>
                                          <span className="author">张惠妹</span>
                                          <span className="times">3:40</span>
                                      </li>
                                      <li>
                                          <span className="checkbox"><input className="check" type="checkbox"/></span>
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
