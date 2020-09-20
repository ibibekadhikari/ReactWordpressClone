import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render () {
        return (
            <footer>
            <div className="footerAll">
                <ul className="footer-item">
                    <li>
                        <a href="#"> 
                            <abbr title="An introduction to the Wordpress project">About</abbr> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="News and Updates"> Blog</abbr></a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="Recommeneded web hosting providers"> Hosting</abbr></a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="Donate to the WordPress Foundation">Donate</abbr> 
                        </a>
                    </li>
                </ul>
    
                <ul className="footer-item">
                    <li>
                        <a href="#">
                            <abbr title="Forums, documentation, and other resources">Support</abbr> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <abbr title="Resources for WordPress developers"> Developers</abbr>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="Give back to WordPress through code, support,translation and more"> Get Involved</abbr>
                        </a>
                    </li>
                </ul>
    
                <ul className="footer-item">
                    <li>
                        <a href="#">
                            <abbr title="Some of the best WordPress sites on the Web">Showcase</abbr>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="Add extra functionality to WordPress"> Plugins</abbr>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="Make your WordPress Pretty"> Themes</abbr>
                        </a>
                    </li>
                </ul>
    
                <ul className="footer-item">
                    <li>
                        <a href="#">
                            <abbr title="Find a WordPress event near you"> WordCamp</abbr>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="Videos,turtorials, and WordCamp sessions"> WordPress.TV  </abbr>  
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="A set of plugins to transform your WordPress into a social network">BuddyPress</abbr>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <abbr title="Fast, slick forums built on WordPress"> bbPress</abbr>
                        </a>
                    </li>
                </ul>
    
                <ul className="footer-item">
                    <li>
                        <a href="#">
                            <abbr title="Hassle-free WordPress hosting"> Wordpress.com</abbr>
    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="Co-founder of WordPress, an example of what WordPress can do"> Matt</abbr>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <abbr title="WordPress.org Privacy Policy">Privacy </abbr>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Public Code
                        </a>
                    </li>
                </ul>
    
                <ul className="footer-item">
                    <li>
                        <i className="fab fa-twitter"></i>
                        <a href="#">
                           <abbr title="Follow @WordPress on Twitter"> @Wordpress</abbr>
                        </a>
                    </li>
                    <li>
                        <i className="fab fa-facebook-f"></i>
                        <a href="#"> 
                            <abbr title="Like WordPress on Facebook"> WordPress</abbr>
                        </a>
                    </li>
                </ul>
            </div>
            
            <h3>Code is poetry</h3>
        </footer>
        );
    }
}

export default Footer;