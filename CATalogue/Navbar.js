import React from 'react';

function Navbar(props)
{
    return (
        <header className="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdIMYLdNcAEzUDBK33stEVz6LHv4dowXvVg&usqp=CAU"/>
            <button onClick={() => props.handleChange("about")}>ABOUT</button>
            <button onClick={() => props.handleChange("catalogue")}>A LA CAT</button>
            <button onClick={() => props.handleChange("facts")}>FACTZ ABOUT CATZ</button>
            <button onClick={() => props.handleChange("gallery")}>CAT GALLERY</button>
        </header>
    )
}

export default Navbar;
