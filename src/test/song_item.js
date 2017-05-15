import React from 'react'
import '../css/song_item.css'
class SongItem extends React.Component{
  render(){
    return(
        <div className="s_list_item">
            <div className="song_info">
                <span className="song_name">{this.props.songData.song.name}</span>
                <span>-</span>
                <span className="artists_name">{this.props.songData.song.album.name}</span>
            </div>
            <div className="song_icon">
                <span className="myFont icon_download"></span>
                <span className="myFont icon_play"></span>
            </div>
        </div>
    )
  }
}
export default SongItem;
