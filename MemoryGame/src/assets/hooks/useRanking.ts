import type { AxiosPromise } from "axios";
import type { PlayerWithScoreInterface } from "../interface/PlayerWithScoreInterface";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/game";

const fetchData = async (): AxiosPromise<PlayerWithScoreInterface[]> => {
    const response = await axios.get(API_URL + "/get-ranking");
    return response;

}

export function useRaking(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["ranking-data"],
        retry: 2,
    })

    return {
        ...query,
        data: query.data?.data
    }
}