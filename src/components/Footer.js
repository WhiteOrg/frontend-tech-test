import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import './Footer.css';

const Footer = () => {

    return (
        <React.Fragment>
            <section>
                <h2>Terms &amp; Conditions</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ab?</li>
                    <li>Amet eligendi veniam placeat illum tenetur fuga rem dolorum incidunt.</li>
                    <li>Id maxime iusto minus sunt quasi mollitia magnam corrupti libero!</li>
                    <li>Nam, necessitatibus sint assumenda cum repellat earum maxime totam voluptatibus?</li>
                    <li>Nesciunt, reprehenderit? Vel iste adipisci modi minima veritatis excepturi quibusdam.</li>
                    <li>Tempora nisi nostrum praesentium, ab voluptatem sunt obcaecati dignissimos nam.</li>
                </ul>
            </section>
            <footer>
                <h3>Share this Tournament</h3>
                <ul className="icons">
                    <li><a href="https://github.com/WhiteOrg/frontend-tech-test"><FaTwitter /></a></li>
                    <li><a href="https://github.com/WhiteOrg/frontend-tech-test"><FaFacebook /></a></li>
                </ul>
            </footer>
        </React.Fragment>
    );

}

export default Footer;