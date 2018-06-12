import React from 'react';
import SongSelector from '../components/SongSelector'
import SongDetail from '../components/SongDetail'

class SongContainer extends React.Component {

  constructor(props){
  super(props);
  this.state = {
    songs: [],
    currentSong: null
  };
  this.handleSongSelected = this.handleSongSelected.bind(this)
}

componentDidMount (){
   const url = `https://itunes.apple.com/gb/rss/topsongs/limit=20/json`
   return fetch(url)
   .then(res => res.json())
   .then(songsData => this.setState({songs: songsData.feed.entry}))
   .catch(error => console.log("Error", error))
}

  handleSongSelected(index){
    const selectedSong = this.state.songs[index]
    this.setState({currentSong: selectedSong})
  }

render(){
  return (
    <div>
      <h2>UK Top 20 Songs List:</h2>
      <SongSelector
        songs ={this.state.songs}
        onSongSelected = {this.handleSongSelected}/>
      <SongDetail song ={this.state.currentSong}/>
    </div>
  );
}

}

export default SongContainer
