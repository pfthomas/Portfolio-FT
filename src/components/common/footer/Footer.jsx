import React from 'react';

import './Footer.css';

function Footer () {
    return (
        <section className="footer bg-[#121212]">
            <hr className="footer-separator"/>
            <section className="text-white">
                <a href="/" target="_blank" rel="noopener noreferrer">Social</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name text-white"> Foster Thomas, Full-Stack Developer</section>
                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email text-white">
                        pf.thomas97@gmail.com
                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__contact text-white">
                        Contact
                    </section>
                </section>
            </section>
            <hr className="footer-separator"/>
        </section>
    )
}

export default Footer;