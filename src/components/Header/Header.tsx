import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss'


export const Header = ():JSX.Element => {
    return (
        <header>
            <nav data-testid='navigation'>
                <ul>
                    <li data-testid='link'>
                        <NavLink exact to='/'>Home page</NavLink>
                    </li>
                    <li data-testid='link'>
                        <NavLink to='/about'>About page</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}