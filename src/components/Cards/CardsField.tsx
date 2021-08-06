import React from "react";
import { cardsInfo } from "../../shared/cardsInfo";
import Card from "./Card";

export default class CardsField extends React.Component {
    getCards(): JSX.Element[] {
        return cardsInfo.map((info, index) => {
            return <Card info={info} key={index}/>;
        })  
    }
    render(): JSX.Element {
        return (
            <div className='cardField'> 
                {this.getCards()}
            </div>
        )
    }
}