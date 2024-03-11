import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from "react-router-dom";
import './Navigation.css'

//Navigation component
const Navigation = () => {
    return (
        <div>
            <div class="links">
                <Link to="/">
                        K.Hajzner
                    </Link>
                    <Link to="/cv">
                        CV
                    </Link>    
                    <Link to="/posts">
                        Posts
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>
            </div>
            <Outlet />
        </div>
  );
};

export default Navigation;