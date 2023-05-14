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
    box-shadow: 1px 1px 5px 1px #b2b2b2 , -1px -1px 5px 1px #b2b2b2;

    img {
        width: 100%;
        border-radius: 18px;
    }
`

export default Card;