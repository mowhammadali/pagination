import React, { useEffect, useLayoutEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { css } from '@emotion/css';
import Card from './Card';

const Cards = () => {
    const {data , isPending} = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const [currentPage , setCurrentPage] = useState(1);
    const [paginateProducts , setPaginateProducts] = useState([]);

    const pageSize = 12;
    const pageCount = Math.ceil(data.length / pageSize);
    const pageNumber = Array.from(Array(pageCount).keys());

    const navigationsSize = 3;
    const [lastNavigationIndex , setLastNavigationIndex] = useState(3);
    const [firstNavigationIndex , setFirstNavigationIndex] = useState(0);

    let filterdPageNumber = pageNumber.slice(firstNavigationIndex , lastNavigationIndex);

    useLayoutEffect(() => {
        setFirstNavigationIndex(lastNavigationIndex - navigationsSize);
    } , [lastNavigationIndex])

    useEffect(() => {
        let lastIndex = pageSize * currentPage;
        let firstIndex = lastIndex - pageSize;
        const filterdItem = data.slice(firstIndex , lastIndex);
        setPaginateProducts(filterdItem);
    } , [currentPage , data])

    const handleNavigationIndex = e => {
        if (e.target.id === "previouse") {
            if (lastNavigationIndex > 3) {
                setCurrentPage(prevState => prevState - 1);
                setLastNavigationIndex(preveState => preveState - 1);
                setFirstNavigationIndex(lastNavigationIndex - navigationsSize);
            }
        }
        if (e.target.id === "next") {
            if (lastNavigationIndex < pageNumber.length) {
                setCurrentPage(prevState => prevState + 1);
                setLastNavigationIndex(preveState => preveState + 1);
                setFirstNavigationIndex(lastNavigationIndex - navigationsSize);
            }
        }
    }

    const handlePaginate = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div className = {CardsStyles}>
            {
                isPending ? <h2>Loading ...</h2> :
                <div className='card'>
                    {
                        paginateProducts.map(item => {
                            return (
                                <Card key={item.idDrink} {...item}/>
                            )
                        })
                    }
                </div>
            }
            <ul className = "navigations">
                <li id="previouse" onClick = {handleNavigationIndex}>
                    {'<'}
                </li>
                {
                    filterdPageNumber.map(item => {
                        return (
                            <li key = {item + 1}
                            onClick={() => handlePaginate(item + 1)}
                            className = {item + 1 === currentPage ? "active" : undefined}>
                                {item + 1}
                            </li>
                        )
                    })
                }
                <li id="next" onClick = {handleNavigationIndex}>
                    {'>'}
                </li>
            </ul>
        </div>
    )
}

const CardsStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 50px 0;
    padding: 0 100px;

    .card {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }

    .navigations {
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;

        li{
            background-color: var(--primary-color);
            padding: 6px 12px;
            border-radius: 50%;
            cursor: pointer;
        }
        li.active {
            background-color: var(--active) !important;
        }
    }
`

export default Cards;