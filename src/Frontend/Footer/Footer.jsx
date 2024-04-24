import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from "react-router-dom";
import './Footer.css'
import socialMedia from '../SocialMedia/mediaLinks.json';

//Navigation component
const Footer = () => {
    console.log(socialMedia.SocialMedia)
    return (
        <footer>
            {socialMedia.SocialMedia.map((item) => (
            <>
                {item.isVisible && <a href={item.Name=="Email" ? "mailto:" : "" + item.Link}> <img src={require("../SocialMedia/Icons/" + item.Icon)} alt={`${item.Name} Icon`} /> </a>}
            </>
            ))}
        </footer>
  );
};

export default Footer;