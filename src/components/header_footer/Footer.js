import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="footer_logo_venue">Event logo</div>
                <div className="footer_copyright">
                    Eventnaam {new Date().getFullYear()}.Alle rechten voorbehouden
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;