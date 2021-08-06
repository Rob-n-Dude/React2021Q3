import React from "react";
import './card.scss';

type CardPropType = {
    info: {
        mark: string,
        volume: string[],
        prise: string[],
        image: string,
        tastes: string[],
    }
    key: number;
}

type CardState = {
    prise: string;
}

export default class Card extends React.Component<CardPropType, CardState> {
    constructor(props: CardPropType) {
        super(props);
        this.state = {
            prise: this.props.info.prise[0],
        }
    }

    getOptions(args: string[]): JSX.Element[] {
        return args.map((val, index) => <option value={val} key={index}>{val}</option>)
    }

    selectClickHandler(e:React.MouseEvent): void {
        const target = e.target as HTMLSelectElement
        this.setState({
            prise: this.props.info.prise[target.selectedIndex]
        })
    }

    render(): JSX.Element {
        return (
            <div className='card'>
                <p className='card_mark'>{this.props.info.mark}</p>
                <img className='card_image' src={this.props.info.image}></img>
                <div className='card_info'>
                    <select className="volume" onClick ={(e) => this.selectClickHandler(e)}>
                        {this.getOptions(this.props.info.volume)}
                    </select>
                    <select className="tastes">
                        {this.getOptions(this.props.info.tastes)}
                    </select>
                </div>
                <div className='card-preorder-info'>
                    <p className='prise'>{this.state.prise}</p>
                    <button className='card-preorder-info_button'>Add</button>
                </div>
            </div>
        )
    }
}