import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss'


export const Header = ():JSX.Element => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to='/'>Home page</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About page</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}