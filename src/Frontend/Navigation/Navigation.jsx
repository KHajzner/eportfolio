import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="links">
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
                    <Link to="/settings">
                        Settings
                    </Link>
            </div>
            <Outlet />
        </div>
  );
};

export default Navigation;