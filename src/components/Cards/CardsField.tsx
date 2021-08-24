import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { iStore } from "../../redux/store";
import { titleParcer } from "../../shared/functions";
import { SearchArticle } from "../../shared/searchValue";
import { Card } from "./Card";


export const CardsField:React.FC = (): JSX.Element => {
    const results = useSelector<iStore, SearchArticle[]>(state => state.results)
    const getCards = (): JSX.Element[] => {
        return results.map((info, index) => {
            return (
                <Link to={`/details/id=${titleParcer(info.title)}`} key={index}><Card info={info}/></Link>
            );
        })  
    }
    return (
        <div className='cardField' data-testid='field'> 
            {getCards()}
        </div>
    )
}
