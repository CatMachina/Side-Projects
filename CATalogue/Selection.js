import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import About from './About';
import CatalogueMenu from './CatalogueMenu';
import Facts from './Facts';
import Gallery from './Gallery';
import Error from './Error';

function Display()
{
  const [page, setPage] = useState("about");
  switch(page)
  {
    case "about":
      return (
        <div>
          <Navbar handleChange={setPage}/>
          <About/>
        </div>
      )
    case "catalogue":
      return (
        <div>
          <Navbar handleChange={setPage}/>
          <CatalogueMenu/>
        </div>
      )
    case "facts":
      return (
        <div>
          <Navbar handleChange={setPage}/>
          <Facts/>
        </div>
      )
    case "gallery":
      return (
        <div>
          <Navbar handleChange={setPage}/>
          <Gallery/>
        </div>
      )
    default:
      return (
        <div>
          <Navbar handleChange={setPage}/>
          <Error/>
        </div>
      )
  }
}

ReactDOM.render(
  <Display/>,
  document.getElementById("page")
);
