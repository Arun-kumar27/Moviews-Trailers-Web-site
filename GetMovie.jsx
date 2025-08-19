import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const GetMovie = ()=>{
    let [movies,setMovies] =useState([]);
    let [search,setSearch] =useState("");
    let [cards,setCards] =useState([]);
    let navigate=useNavigate();
    useEffect(
        ()=>{
            // this api fetches only trending movies (20)
            fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=ed929a048235c8521c94726108ce4140&language=en-US").
            then(res=>res.json()).
            then(data=>{console.log(data)
            setMovies(data.results)
            setCards(data.results)
        }
            )
        },[]
    );
    console.log(movies);


    function movieSearch(){
        fetch(`https://api.themoviedb.org/3/search/movie?&api_key=ed929a048235c8521c94726108ce4140&query=${search}`)
        .then(res=>res.json())
       // .then(data=>setMovies(data.results))
       .then(data=>setCards(data.results))
    }
    return (
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
               onChange={(e)=>setSearch(e.target.value)}
            />
            <Nav.Link href="#cart"> <Button variant="outline-success" onClick={movieSearch}>Search</Button></Nav.Link> 
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
         <Carousel>
        {
            movies.map((movie)=>{
                return(
                    <>
                     {/* <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                     <p>{movie.title}</p> */}
             
                <div>
                    <img src={`https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg`} />
                    <p className="legend">{movie.title}</p>
                </div>
                
                    </>
                )
            })
        }
        </Carousel>

        {/* now using carts */}
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
export default GetMovie;