import React from "react";
import "./App.css"
import { originals,action,romance,comedy, horror } from './urls'
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
   <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals' />
     <RowPost url={action} title='Action' isSmall />
     <RowPost url={romance} title='Romance' isSmall />
     <RowPost url={comedy} title='Comedy' isSmall />
     <RowPost url={horror} title='Horror' isSmall />
   </div>
  );
}

export default App;
