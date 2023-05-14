import React from 'react';
import {css} from "@emotion/css";

const Card = (props) => {
    const {strDrinkThumb , strDrink} = props;
    return (
        <div className = {CardStyles}>
            <img src = {strDrinkThumb} alt = 'drink'/>
            <h2>{strDrink}</h2>
        </div>
    )
}

const CardStyles = css`
    width: 280px;
    height: auto;
    padding: 20px;
    box-shadow: 1px 1px 2px 2px gray , -1px -1px 2px 2px gray;

    img {
        width: 100%;
    }
`

export default Card