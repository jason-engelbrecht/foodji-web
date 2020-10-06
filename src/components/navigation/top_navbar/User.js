import React from 'react';

function User() {
    return (
        <li className="User nav-item dropdown">
            <a
                className="nav-link dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                />
            </a>
            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">My profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="my-1 text-muted"/></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
        </li>
    )
}

export default User;
