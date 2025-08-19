import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetMovie from "./GetMovie"
import SpecificMovie from "./SpecificMovie";
import NavbarMovies from "./NavbarMovies";
import CarouselMovies from "./CarouselMovies";
import CardMovies from "./CardMovies";
import { Pagination } from "react-bootstrap";

const App=()=>{
return(
   <>
     <BrowserRouter>
        <Routes>
             <Route path="/" element ={ <GetMovie/>}/>
             <Route path="specificmovie" element={<SpecificMovie/>}/>
         </Routes>
     </BrowserRouter>
  
  </>
)
}
export default App;