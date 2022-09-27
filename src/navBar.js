import React from "react";
import { Link } from "react-router-dom";


const NavBar = ({ dogs }) => {


    const links = dogs.map(dog => (
        <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
    {dog.name}</Link>
      ));


    return (

        <nav>
        <li><Link to="/dog">Home</Link></li>
        <li>{links}</li>
        </nav>


    )
}

export default NavBar