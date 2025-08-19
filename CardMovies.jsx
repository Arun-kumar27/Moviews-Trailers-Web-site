import { useEffect, useState } from "react"
import "./CardMovies.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const CardMovies = () =>{
    let [search,setSearch] =useState("");
    let [cards,setCards] =useState([]);
    let navigate= useNavigate();

      useEffect(
                ()=>{
                    // this api fetches only trending movies (20)
                    fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=ed929a048235c8521c94726108ce4140&language=en-US").
                    then(res=>res.json()).
                    then(data=>{console.log(data)
                   // setMovies(data.results)
                    setCards(data.results)
                }
                    )
                },[]
            );
      function movieSearch(){
        fetch(`https://api.themoviedb.org/3/search/movie?&api_key=ed929a048235c8521c94726108ce4140&query=${search}`)
        .then(res=>res.json())
       // .then(data=>setMovies(data.results))
       .then(data=>setCards(data.results))
    }

    return (
        <>
             <div id='cart' className='cards d-flex flex-wrap gap-4'>
        { 
            cards.map((carddata)=>{
                return(
                    <>
                     
                         <Card style={{ width: '18rem' }}>
                       <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${carddata.backdrop_path}`} />
                        <Card.Body>
                         <Card.Title>{carddata.title}</Card.Title>
                        <Card.Text>
                         {carddata.overview}
                        </Card.Text>
                        {/* <Button variant="primary" onClick={()=>navigate("/specificmovie",{state:carddata})}>more details</Button> */}
                         <Button variant="primary" onClick={()=>navigate("/specificmovie",{state:carddata})}>more details</Button>
                        </Card.Body>
                        </Card>
                      
                    </>
                )
            })
            
        }
        </div>
      
     </>
    )
}
export default CardMovies;