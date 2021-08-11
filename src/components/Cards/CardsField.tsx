import React from "react";
import { SearchValue } from "../../shared/searchValue";
import { Card } from "./Card";

interface iCardsField {
    searchResults: SearchValue[]
}

export const CardsField:React.FC<iCardsField> = ({searchResults}): JSX.Element => {
    const getCards = (): JSX.Element[] => {
        return searchResults.map((info, index) => {
            return <Card info={info} key={index}/>;
        })  
    }
    return (
        <div className='cardField'> 
            {getCards()}
        </div>
    )
}
