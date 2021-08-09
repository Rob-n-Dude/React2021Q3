import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { formPropType, PossibleSex } from '../shared/initialFormState';
import './form.css';

// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
// type Dispatch<A> = (value: A) => void;
// type SetStateAction<S> = S | ((prevState: S) => S);


interface IForm {
  setFormValues: Dispatch<SetStateAction<formPropType[]>>;
}

interface iErrors {
  firstName?: string,
  lastName?: string,
  birthDate?: string,
  country?: string,
  sex?: PossibleSex,
  agree?: boolean,
}

export const Form:React.FC<IForm> = ({setFormValues}):JSX.Element => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('UK');
  const [agree, setAgree] = useState(false);
  const [sex, setSex] = useState(PossibleSex.empty);
  const [errors, setErrors] = useState({} as iErrors);

  const validate = () => {
    setErrors({});
    if(!agree){
      setErrors((state) => ({...state, agree}))
    }
    if(firstName === ''){
      setErrors((state) => ({...state, firstName}))
    }
    if(lastName === ''){
      setErrors((state) => ({...state, lastName}))
    }
    if(birthDate === ''){
      setErrors((state) => ({...state, birthDate}))
    }
    if(country === ''){
      setErrors((state) => ({...state, country}))
    }
    if(sex === ''){
      setErrors((state) => ({...state, sex}))
    }
  }

  useEffect(() => {
    validate();
  }, [firstName, lastName, birthDate, country, agree, sex])

  const handlerSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault();
    if(Object.keys(errors).length === 0){
      setFormValues((state: formPropType[]) => [...state, {firstName, lastName, birthDate, country, agree, sex}])
      alert(`${lastName} ${firstName}, добро пожаловать`)
      reset();
    }
  }

  const radioHandler = (event:React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setSex(target.value as PossibleSex);
  }

  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setAgree(false);
    setCountry('UK');
    setSex(PossibleSex.empty)
  }

  return (
    <form onSubmit = {handlerSubmit} className='formStyle'>
      <label htmlFor='firstName'>
        <p>Name: {errors?.firstName === '' && <span>* name should be fill</span>}</p>
        <input type='text'
        name='firstName'
        value={firstName}
        onChange={(event)=> setFirstName(event.target.value)}/>
      </label>
      <label htmlFor='lastName'>
        <p>Surname: {errors?.lastName === '' && <span>* surname should be fill</span>}</p>
        <input type='text'
        name='lastName'
        value={lastName}
        onChange={(event)=> setLastName(event.target.value)}/>
      </label>
      <label htmlFor='birthDate'>
      <p>Birth date: {errors?.birthDate === '' && <span>* birth date should be fill</span>}</p>
        <input type='date'
        name='birthDate'
        value={birthDate}
        onChange={(event)=> setBirthDate(event.target.value)}/>
      </label>
      <label htmlFor='country'>
      <p>Country: {errors?.country === '' && <span>* country should be fill</span>}</p>
        <select className='' name='country' value={country} onChange={(event)=> setCountry(event.target.value)}>
          <option>Russia</option>
          <option>Belarus</option>
          <option>UK</option>
          <option>USA</option>
        </select>
      </label>
      <label>
      <p>Sex: {errors.sex === PossibleSex.empty && <span>* sex should be choose</span>}</p>
      <div className="sex"
        onChange={(event) => radioHandler(event)}>
        <input type="radio" 
          id="sexChoice1"
          name="sex" 
          value={PossibleSex.male} 
          checked={sex === PossibleSex.male}/>
          <label htmlFor="sexChoice1">Male</label>
        <input type="radio" 
          id="sexChoice2"
          name="sex" 
          value={PossibleSex.female} 
          checked={sex === PossibleSex.female}/>
          <label htmlFor="sexChoice2">Female</label>
      </div>
      </label>
      <label htmlFor='agree' className='checkBox'>
      <input type='checkbox' name='agree' checked={agree} onChange={() => setAgree(prev => !prev)}/>
        <p>Use of this website constitutes acceptance of the Terms of Use and Privacy Policy. {errors?.agree !== undefined && <span>* agree should be check</span>}</p>
      </label>
      <div>
        <input type='submit' value='Send' className='btn'/>
      </div>
    </form>
  );
}