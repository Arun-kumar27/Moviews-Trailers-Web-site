import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CardMovies from "./CardMovies";


const CarouselMovies =()=>{

    let [movies,setMovies]=useState([]);
     useEffect(
            ()=>{
                // this api fetches only trending movies (20)
                fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=ed929a048235c8521c94726108ce4140&language=en-US").
                then(res=>res.json()).
                then(data=>{console.log(data)
                setMovies(data.results)
                //setCards(data.results)
            }
                )
            },[]
        );

        return(
            <>
                  <Carousel>
                        {
                            movies.map((movie)=>{
                                return(
                                    <>
                                     {/* <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                                     <p>{movie.title}</p> */}
                             
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                                    <p className="legend">{movie.title}</p>
                                </div>
                                
                                    </>
                                )
                            })
                        }
                        </Carousel>
            </>
        )
}
export default CarouselMovies;

