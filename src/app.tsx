import React, {useState} from 'react';
import {Form} from './form/form';
import {Card} from './card/card';
import { formPropType } from './shared/initialFormState';

export const App:React.FC = ():JSX.Element => {
  const [formValues, setFormValues] = useState<formPropType[]>([]);
  return(
    <>
     <Form setFormValues={setFormValues}/>
     {
       formValues.map((value,index) => {
        return <Card setCardValues = {value} key={index}/>
      })
     }
     
    </>
  );
}
