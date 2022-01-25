import React from "react"
import logo from '../images/face.jpg';


 function Header() {
    return (
        <header className="header">
            <img 
                src={logo}
                className="header--image"
                alt="ada"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React-meme-geenrator-project</h4>
        </header>
    )
}

export default Header