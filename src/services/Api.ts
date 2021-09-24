import { SearchFiltres } from "../shared/searchFiltres";
import { SearchValue } from "../shared/searchValue";

const API_KEY = '&apiKey=87ca461f985545f6a72a5f22ef657d27';

const createRequestUrl = (filtres: SearchFiltres): string => {
    const url = 'https://newsapi.org/v2/everything?language=en&';
    const queryParams = Object.keys(filtres).map((key) => `${key}=${filtres[(key as keyof SearchFiltres)]}`).join('&');
    return url + queryParams + API_KEY
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
