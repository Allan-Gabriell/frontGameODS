import axios, { type AxiosPromise } from "axios";
import type { CardInterface } from "../interface/CardInterface.ts";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<CardInterface[]> => {
  const response = axios.get(API_URL + "/card");
  return response;
};

export function useCardData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["card-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
