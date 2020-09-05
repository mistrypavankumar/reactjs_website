import React from 'react';
import 'tachyons';
import './Home.css';
import '../../App.css';


export default function Home() {
    return (
        <>
           <div className = "home__banner">
               <div className = "banner__content">
               <h1 className = "tc banner__heading">Welcome To <span className = "bright">Pest Detection</span></h1>
               <p className = "tc banner__para">We are on our way to revolutionize agriculture in India.</p>
               </div>
           </div>
        </>
    )
}
