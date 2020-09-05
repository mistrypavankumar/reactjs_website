import React,{useState} from 'react';
import './Navbar.css';
import 'tachyons';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Link} from 'react-router-dom';

export default function Navbar() {

    const [Click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!Click);
    
    const showButton = () => {
        if(window.innerWidth <= 968){
            setButton(false);
        }else{
            setButton(true);
        }
    } 

    window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value = {{color : 'white'}}>
        <div className = "nav__container">
            <nav>
            <div className = "logo__container">
                <h1 className = "logo">Pest Detection</h1>
            </div>
            <div className = "navList__container">
                <ul>
                    <li className = "link_item grow">
                    <Link to = "/" >Home
                    </Link>
                    </li>

                    <li className = "link_item grow">
                    <Link to = "/description" >Description
                    </Link>
                    </li>

                    <li className = "link_item grow">
                    <Link to = "/whyUs" >Why Us
                    </Link>
                    </li>

                    <li className = "link_item grow">
                    <Link to = "/team" >Team
                    </Link>
                    </li>

                    <li className = "link__right shadow grow" >
                    <Link to = "/contactUs" >Contact Us
                    </Link>
                    </li>

                </ul>
                </div>
                <div className ='menu_icon' onClick = {handleClick}>
                {Click ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
            </div>
        </IconContext.Provider>
        </>
    )
}
