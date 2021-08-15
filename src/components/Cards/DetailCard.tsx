import React from "react";
import { SearchArticle } from "../../shared/searchValue";

interface IDetailCard {
    info: SearchArticle
}

export const DetailCard: React.FC<IDetailCard> = ({info}):JSX.Element => {
    return (
        <div className='detail-card-wrapper'>
            <div className='detail-card_item'>
                <p>Source name: {info.source.name}</p>
                <p>Source id: {info.source.id}</p>
            </div>
            <div className='detail-card_item'>
                <p>Author: {info.author}</p>
            </div>
            <div className='detail-card_item'>
                <p>Title: {info.title}</p>
            </div>
            <div className='detail-card_item'>
                <p>Description: {info.description}</p>
            </div>
            <div className='detail-card_item'>
                <p>URL:<a>{info.url}</a></p>
            </div>
            <div className='detail-card_item-image'>
                <p>Image:</p>
                <img src={info.urlToImage} alt={info.urlToImage} />
            </div>
            <div className='detail-card_item'>
                <p>Published at: {info.publishedAt}</p>
            </div>
            <div className='detail-card_item'>
                <p>Content: {info.content}</p>
            </div>
        </div>
    )
}
