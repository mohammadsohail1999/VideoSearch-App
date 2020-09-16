import React from 'react';
import Search from './Search';
import youtube from '../API/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
const KEY = 'AIzaSyBHm-O5JRPuFHvAGKbc6-N3NYNmp8cafSM';

class App extends React.Component{


  state = {videos : [],
            selectedVideo: null}

componentDidMount(){

 this.onTermSubmit('messi')

}


 onTermSubmit= async (term)=>{

  const response = await youtube.get('/search',{
    params:{
      part: 'snippet',
      maxResults: 5,
      key: KEY,
      q: term
    }


   })
   this.setState({videos:response.data.items,
   selectedVideo: response.data.items[0]
  });
  
   
 }
  
  
onVideoSelect = (video) =>{



this.setState({selectedVideo: video});

};

  
 // 


 
  


    render(){

      return (
      <div className="ui container">

       <Search onTermSubmit = {this.onTermSubmit} />
       <div className="ui grid">
         <div className="ui row">
           <div className="eleven wide column">
       <VideoDetail video={this.state.selectedVideo}/>
         </div>
         <div className="five wide column">
         <VideoList onVideoSelect = {this.onVideoSelect} videolist= {this.state.videos} />
      </div>
      </div>
      </div>
      </div>
      )



    } 






}


export default App;