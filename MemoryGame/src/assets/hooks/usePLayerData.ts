import axios, { type AxiosPromise } from "axios";
import type { PlayerInterface } from "../interface/PlayerInterface";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/game";

const fetchData = async (): AxiosPromise<PlayerInterface[]> => {
    const response = await axios.get(API_URL + "/players");
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