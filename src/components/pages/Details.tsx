import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getDetails } from "../../services/Api";
import { SearchArticle } from "../../shared/searchValue";
import { DetailCard } from "../Cards/DetailCard";

export const Details:React.FC = ():JSX.Element => {

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
        const title = pathName[pathName.length-1].slice(3);
        return title;
    }

    useEffect(() => {
        console.log('spo')
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