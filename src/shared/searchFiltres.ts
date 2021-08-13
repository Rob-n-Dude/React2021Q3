export enum SortBy {
    relevancy = 'relevancy',
    popularity = 'popularity',
    publishedAt = 'publishedAt'
}

export const initialSearch = {
    q: '',
    sortBy: SortBy.publishedAt,
    pageSize: 5,
    page: 1,
}

export interface SearchFiltres {
    q: string,
    sortBy: SortBy,
    pageSize: number,
    page: number,
}

