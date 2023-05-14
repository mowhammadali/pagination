import React from 'react';
import { css } from "@emotion/css";

const Nav = () => {
    return (
        <div className = {NavStyles}>
            <h2>Products</h2>
        </div>
    )
}

const NavStyles = css`
    width: 100%;
    padding: 20px 30px;
    background-color: var(--primary-color);
    color: white;
`

export default Nav;