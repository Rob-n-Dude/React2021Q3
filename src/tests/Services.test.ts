import { API_KEY, createDetailsUrl, createRequestUrl, DETAILS_URL, getDetails, getNews } from "../services/Api";
import { SearchFiltres, SortBy } from "../shared/searchFiltres";


describe('News api test', () => {
    const title = 'apple';
    const requestURL = 'https://newsapi.org/v2/everything?language=en&q=apple&sortBy=publishedAt&page=1&pageSize=5&apiKey=87ca461f985545f6a72a5f22ef657d27';
    const filters:SearchFiltres = {
        q: title,
        sortBy: SortBy.publishedAt,
        page:1,
        pageSize:5
    }

    describe('test querry creating function', () => {
        
        it(`Should return ${DETAILS_URL + title + API_KEY}`, () => {
            expect(createDetailsUrl(title)).toEqual(DETAILS_URL + title + API_KEY)
        })
        it(`Should return ${requestURL}`, () => {
           
            expect(createRequestUrl(filters)).toEqual(requestURL);

        })
    })

    describe('Test api requests', () => {
        it('should return correct', async () => {
            await getNews(filters).then(value => {
                expect(value.totalResults).not.toBeFalsy();
                expect(value.articles).toBeInstanceOf(Array);
            })}
        );
        it('should return correct', async () => {
            await getDetails(title).then(value => {
                expect(value).not.toBeFalsy()
            })
        })
        it('Error should be thrown', async () => {
            await getNews({...filters, page: 1231231}).catch((error) => {
                expect(error).toStrictEqual(new Error('Something gone wrong'))
            })
        })
        it('Error should be thrown', async () => {
            await getDetails('sdfasdgggdag').catch((error) => {
                expect(error).toStrictEqual(new Error('Something gone wrong'))
            })
        })
    })
})