import React from "react";
import { SearchArticle } from "../../shared/searchValue";
import './card.scss';

interface iCard {
    info: SearchArticle,
}

export const Card:React.FC<iCard> = ({info}):JSX.Element => {
    return (
        <div className='card' data-testid='card'>
            <div className='card-content'>
                <div className='card-content_tittle'>{info.title}</div>
                <div className='card-content_content'>{info.content}</div>
                <div className='card-content_author'>{info.author}</div>
            </div>
            <div className='card-image_wrapper'>
                <img className='card-image_wrapper_image' src={info.urlToImage} alt={info.title} />
            </div>
        </div>
    )
}
