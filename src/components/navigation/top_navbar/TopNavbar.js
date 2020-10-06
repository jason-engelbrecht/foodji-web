import React from 'react';
import Notifications from "./Notifications";
import User from "./User";
import Search from "./Search";

function TopNavBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><i className="fas fa-utensils mr-2"/>foodje</a>

                <div className="navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <Search/>
                    </div>

                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <Notifications/>
                        <User/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNavBar;
