import axios, { type AxiosPromise } from "axios";
import type { PlayerInterface } from "../interface/PlayerInterface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

type CreatePlayerDTO = Omit<PlayerInterface, "id" | "score">;

const postData = async (data: CreatePlayerDTO): AxiosPromise<PlayerInterface> => {
  return axios.post(API_URL + "/player", data);
};

export function usePlayerDataMutate() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['player-data'] });
    },
  });

  return mutation; 
}
