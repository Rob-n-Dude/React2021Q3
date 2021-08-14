import React from "react";
import { Link } from "react-router-dom";


export const Header = ():JSX.Element => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home page</Link>
                    </li>
                    <li>
                        <Link to='/about'>About page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}