import React from 'react'
import './Footer.css'
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <div class="footer_content">
            <div class="footer_contacts">
                {/* <button class="footer_git">git</button> */}
                <button className="footer_contact">
                    <i className="fa fa-github fa-4x"></i>
                </button>
                <button className="footer_contact">
                    <i class="fa fa-linkedin fa-4x"></i>
                </button>
                <button className="footer_contact">
                    <i class="fa fa-envelope fa-4x"></i>
                </button>


                {/* <div><i className="fa fa-github"></i></div> */}

            </div>

            <p class="footer_cpr">&copy; 2020 Andy Kim</p>
        </div>
    );

}

export default Footer;