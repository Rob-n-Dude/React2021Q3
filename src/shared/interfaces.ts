import { Dispatch } from "react";
import { SearchArticle } from "./searchValue";

export interface IPage {
    setResults: Dispatch<React.SetStateAction<SearchArticle[]>>
    Results: SearchArticle[],
}