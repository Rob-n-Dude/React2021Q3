import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getDetails } from "../../services/Api";
import { IPage } from "../../shared/interfaces";
import { SearchArticle } from "../../shared/searchValue";
import { DetailCard } from "../Cards/DetailCard";

export const Details:React.FC<IPage> = ({results}):JSX.Element => {

    const history = useHistory();
    const [detailInfo, setDetailInfo] = useState<SearchArticle>({} as SearchArticle);
    const [loading, setLoading] = useState<boolean>(true);

    const getDetailsInfo = (title:string) => {
        setLoading(true);
        getDetails(title).then((value) => {
            setDetailInfo(() => value);
        }).finally(() => {
            setLoading(() => false);
        })
    }

    const getTitle = (): string => {
        const pathName = history.location.pathname.split('/');
        const index = (+pathName[pathName.length-1]);
        return results[index].title;
    }

    useEffect(() => {
        getDetailsInfo(getTitle())
    }, [])
    return (
        <>
            {loading ? 
            <p>Loading...</p> :
            <DetailCard info={detailInfo}></DetailCard>}
        </>
    )
}