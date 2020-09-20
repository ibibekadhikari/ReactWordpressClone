import React from 'react';
import './Features.css';

class Features extends React.Component {
    render () {
        return (
    <>
    <div className="background">
    </div>
    <div className="lower">
        <p> Discover more sites built with WordPress.</p>
    </div>
    <div className="features">
        <p id="feat">Powerful Features</p>
        <p>Limitless possibilities. What will you create?</p>
        <div className="featuresHere">
        <ul>
            <li><br/><br/><i className="fas fa-paint-brush"><br/><span>Customizable <br/> Designs</span></i></li>
            <li><br/><br/><i className="fas fa-calendar-minus"><br/><span>SEO <br/> Friendly</span></i></li>
            <li><br/><br/><i className="fas fa-mobile-alt"><br/><span>Responsive <br/> Mobile Sites.</span></i></li>
            <li><br/><br/><i className="fas fa-signal"><br/><span>High<br/>Perfomance</span></i></li>
            <li><br/><br/><i className="fas fa-running"><br/><span>Manage on<br/> the Go.</span></i></li>
            <li><br/><br/><i className="fab fa-expeditedssl" style={{fontSize: "35px"}}><br/><span>High<br/> Security.</span></i></li>
            <li><br/><br/><i className="fas fa-folder-plus"><br/><span>PowerFul<br/> Media Management</span></i></li>
            <li><br/><br/><i className="fas fa-snowman"><br/><span>Easy and<br/> Accessible.</span></i></li>

        </ul>
        </div>
        <p id="featuresP">Extend WordPress with over 55,000 plugins to help your website meet your needs. Add an online store, galleries, mailing lists, forums, analytics, and<a href="https://wordpress.org/plugins/"> much more.</a> </p>

        </div>
        </>
        );
    }
}

export default Features;