import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
          <div className="container">
            <div className="footer">
                <div className="row">
                  <div className="column">
                    <h3 className="title">Resources</h3>
                    <Link to="" className="footer-link">Udemy</Link>
                    <Link to="" className="footer-link">Team-TreeHouse</Link>
                    <Link to="" className="footer-link">Youtube</Link>
                  </div>
                  <div className="column">
                    <h3 className="title">Services</h3>
                    <Link to="" className="footer-link">Consulting</Link>
                    <Link to="" className="footer-link">Development</Link>
                    <Link to="" className="footer-link">Planning</Link>
                  </div>
                  <div className="column">
                    <h3 className="title">Social</h3>
                    <Link to="" className="footer-link">Facebook</Link>
                    <Link to="" className="footer-link">Instagram</Link>
                    <Link to="" className="footer-link">Youtube</Link>
                  </div>
                </div>
            </div>
          </div> 
        </>
    )
}
export default Footer;