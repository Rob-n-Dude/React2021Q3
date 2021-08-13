export interface SearchValue {
    totalResults: number,
    articles: [SearchArticle],
}

export interface SearchArticle {
    source: {
        id: number,
        name: string,
        },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}