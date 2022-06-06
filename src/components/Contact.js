import React from 'react';
import './css/Contact.css';
// import Email, {send} from './smtp';

export default function Contact() {

    return (
        <div className="contact">
            <h2>Contact</h2>
            <address>
                <h3>Klaus Mistlberger</h3>
                <p>
                    Louise-Martini-Weg 5/23
                    <br />
                    A - 1030 Wien
                </p>
                {/* <br /> */}
                mail:&nbsp;
                <a className="contact" href="mailto:klaus.mistlberger@pm.me">
                    klaus.mistlberger@pm.me
                </a> 
                <br />
                tel:&nbsp;
                <a className="contact" href="tel:+436502908873">
                    +43 650 290 88 73
                </a> 
                <br />
                <br />
                <a href="https://github.com/klausMistlberger/mbkrocks-react" target="_blank" rel="noreferrer">GitHub repo for this page</a>
                <br />
                <a href="https://gitlab.com/klausMistlberger">My GitLab</a>
            </address>
        </div>

    );
};