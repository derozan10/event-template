import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.482323046052!2d4.446228915940818!3d51.210189940211045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f76e1e181cf9%3A0xc311b2d433e0c555!2sDr.van+de+Perrelei+25%2C+2140+Antwerpen!5e0!3m2!1snl!2sbe!4v1537005162637"
                width="100%"
                height="500px"
                frameBorder="0"
                title="locatie google maps"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Locatie</div>
            </div>

        </div>
    );
};

export default Location;