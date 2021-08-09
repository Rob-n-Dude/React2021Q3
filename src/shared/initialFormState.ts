export type formPropType = {
    firstName: string,
    lastName: string,
    birthDate: string,
    country: string,
    sex: PossibleSex,
    agree: boolean,
}

export enum PossibleSex {
    empty = '',
    male = 'Male',
    female = 'Female',
}

export const initialFormState = {
    firstName: '',
    lastName: 'string',
    birthDate: '',
    sex: PossibleSex.empty,
    country: 'Russia',
    agree: false,
}