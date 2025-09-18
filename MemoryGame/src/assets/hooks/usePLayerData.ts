import axios, { type AxiosPromise } from "axios";
import type { PlayerInterface } from "../interface/PlayerInterface";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<PlayerInterface[]> => {
    const response = axios.get(API_URL + "/player");
    return response;
};

export function usePlayerData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey:["player-data"],
        retry: 2,
    });

    return {
        ...query,
        data: query.data?.data,
    };
}