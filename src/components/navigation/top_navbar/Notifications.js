import React from 'react';

function Notifications() {
    return (
        <li className="Notifications nav-item dropdown mr-2">
            <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="fas fa-bell"/>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
            >
                <li><a className="dropdown-item" href="#">Some news</a></li>
                <li><a className="dropdown-item" href="#">Another news</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
    )
}

export default Notifications;
