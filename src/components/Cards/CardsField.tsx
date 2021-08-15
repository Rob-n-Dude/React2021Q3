import React from "react";
import { Link } from "react-router-dom";
import { SearchArticle } from "../../shared/searchValue";
import { Card } from "./Card";

interface iCardsField {
    searchResults: SearchArticle[]
}

export const CardsField:React.FC<iCardsField> = ({searchResults}): JSX.Element => {
    const getCards = (): JSX.Element[] => {
        return searchResults.map((info, index) => {
            return (
            <>
            <Link to={`/details/${index}`} key={`${index}${index}`}><Card info={info} key={`${index}${index}`}/></Link>
            </>
            );
        })  
    }
    return (
        <div className='cardField'> 
            {getCards()}
        </div>
    )
}
