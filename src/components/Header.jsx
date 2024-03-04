import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Header = () => {
    return (
      <nav>
          <h1>TripIsle Andaman</h1>
          <main>
              <HashLink to ={"/#home"}>Home</HashLink>
              <HashLink to ={"/#about"}>About</HashLink>
              <Link to ={"/contact"}>Contact</Link>
          </main>
      </nav>
    )
  }
  
  export default Header