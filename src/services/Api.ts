import { SearchFiltres } from "../shared/searchFiltres";
import { SearchArticle, SearchValue } from "../shared/searchValue";

const API_KEY = '&apiKey=87ca461f985545f6a72a5f22ef657d27';
const URL = 'https://newsapi.org/v2/everything?language=en&';
const DETAILS_URL ="https://newsapi.org/v2/everything?qInTitle=";

const createRequestUrl = (filtres: SearchFiltres): string => {
    const queryParams = Object.keys(filtres).map((key) => `${key}=${filtres[(key as keyof SearchFiltres)]}`).join('&');
    return URL + queryParams + API_KEY
}

const createDetailsUrl = (tittle: string): string => {
    return DETAILS_URL + tittle + API_KEY;
}

export const getNews = async (filters: SearchFiltres): Promise<SearchValue> => {
    const responce = await fetch(createRequestUrl(filters));
    const data = await responce.json();
    if (data.status !== 'ok') {
        throw new Error('Something gone wrong')
    }
    const { articles, totalResults } = data;
    return {articles: articles, totalResults: totalResults};
}

export const getDetails = async (tittle:string):Promise<SearchArticle> => {
    const responce = await fetch(createDetailsUrl(tittle));
    const data = await responce.json();
    if (data.status !== 'ok') {
        throw new Error('Something gone wrong')
    }
    const { articles } = data;
    return articles[0];
}
