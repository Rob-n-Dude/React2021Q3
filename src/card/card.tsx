import React from 'react';
import { formPropType } from '../shared/initialFormState';
import './card.css';

export interface ICard {
  setCardValues: formPropType;
}

export const Card:React.FC<ICard> = ({setCardValues}): JSX.Element => {

  return(
    <div className='allCards'>
      <div className='card'>
        <h5 className='formInfo'>Name: <span>{setCardValues.firstName}</span></h5>
        <h5 className='formInfo'>Surname: <span>{setCardValues.lastName}</span></h5>
        <h5 className='formInfo'>Birth date: <span>{setCardValues.birthDate}</span></h5>
        <h5 className='formInfo'>Country: <span>{setCardValues.country}</span></h5>
        <h5 className='formInfo'>Sex: <span>{setCardValues.sex}</span></h5>
      </div>
    </div>
  )
}
