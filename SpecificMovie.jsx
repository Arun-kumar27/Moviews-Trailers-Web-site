import { useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from 'react-youtube';
const SpecificMovie =()=>{

    let location=useLocation();
    console.log(useLocation);
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }
    let [trailor,setTrailor] = useState("");
    function getTrailor(id){
        //console.log(id);

        fetch(`http://api.themoviedb.org/3/movie/${id}?&api_key=ed929a048235c8521c94726108ce4140&append_to_response=videos`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);// in this see the output and obtain the requitred path
            console.log(data.videos.results[0].key);
            setTrailor(data.videos.results[0].key)
            
        })
        
    }
    
    return(
        // <>
        // <h1>Specific</h1>
        // </>
      //  <img src={`https://image.tmdb.org/t/p/original/${location.state.backdrop_path}`} alt="" width="100%"/>

      <>
      <div className="d-flex align-items-center gap-4">
        <div className="w-50">
            <img src={`https://image.tmdb.org/t/p/original/${location.state.backdrop_path}`} alt="" width="100%"/>
        </div>
        <div className="w-50">
            <h1 className="text-center">{location.state.original_title}</h1>
            <p>{location.state.overview}</p>
            <p>{location.state.vote_average}</p>
            <button className="btn btn-primary" onClick={()=>getTrailor(location.state.id)}>Play Trailor</button>
        </div>
         
      </div>
     
      <YouTube videoId={trailor} opts={opts}  />
      </>
        
    )
}
export default SpecificMovie;
