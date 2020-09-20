import React from 'react';
import './Lower.css';
import Blondie from './Blondie.png';
import Whitehouse from './Whitehouse.png';
import Martha from './Martha.png';
import W from './W.jpg';



class Lower extends React.Component {
    render () {
        return (
            <>
            <div className="cmty">
            <div className="cmty-image">
                <div className="cmty-descp">
                    <h1>Community</h1>
                    <p>Hundreds of thousands of developers, content creators, and site owners gather at monthly meetups in 817 cities worldwide.</p>
                    <a href="#"><button className="cmty-btn">Find a local WordPress community</button></a>
                </div>
            </div>
    </div>

    <div className="getWP">
        <h1>Get Started with WordPress</h1>
        <p>Over 60 million people have chosen WordPress to power the place on the web they call “home” — join the family.</p>
        <a href="#"><button className="get-btn">Get WordPress</button></a>
    </div>
    <hr/>
    <div className="container">
        <div className="container-info">
            <div className="info-item">
                <h4><a href="# " className="container-heading">WordPress Swag</a></h4>
                <a href="#"><img src={W} alt="Wordpress Swag" /></a>
            </div>

            <div className="info-item">
                <h4><a href="#" className="container-heading">News From Our Blog</a></h4>
                <a href="#" className="container-descp">WordPress 5.5.1 Maintenance Release</a>
                <p>WordPress 5.5.1 is now available! This maintenance release features 34 bug fixes, 5 enhancements, and 5 bug fixes for the block editor. These bugs affect WordPress version 5.5, so you’ll want to upgrade. You can download WordPress 5.5.1 directly, or visit the Dashboard → Updates screen and click Update Now. If your sites support automatic background updates, they’ve already started the update process. […]</p>
            </div>

            <div className="info-item">
                <h4> <span  className="container-head"> It’s Easy As…</span></h4>
                <ol start="1">
                    <li>
                        <a href="#" className="container-descp">Find a trusted web host</a> and maybe support WordPress at the same time.
                    </li>

                    <li>
                        <a href="#" className="container-descp">Download & install WordPress</a>  with our famous 5-minute installation. Publishing has never been easier.
                    </li>

                    <li>
                        <a href="#" className="container-descp">
                            Spend some time reading our documentation </a>
                        , get to know WordPress better every day and start helping others, too.
                    </li>
                </ol>
            </div>

            <div className="info-item">
                <h4><a href="#" className="container-heading">Wordress Users</a></h4>
                                <p>
                    <a href="#">
                        <img src={Whitehouse} alt="Whitehouse" className="LowerImg"/>
                    </a>
                </p>
                <p>
                    <a href="#">
                        <img src={Martha} alt="Martha" className="LowerImg"/>
                    </a>
                </p>
                <p>
                    <a href="#">
                        <img src={Blondie} alt="Blondie" className="LowerImg"/></a>
                    </p>
                    
                   
                <a href="#">… and hundreds more</a>                
            </div>
        </div>
    </div>
    </>
        );
    }
}

export default Lower;