import axios, { type AxiosPromise } from "axios";
import type { PlayerInterface } from "../interface/PlayerInterface";
import { useMutation } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/game"; // caminho correto do controller Game

type CreatePlayerDTO = Omit<PlayerInterface, "id" | "score">;

const postData = async (data: CreatePlayerDTO): AxiosPromise<void> => {
  return axios.post(API_URL + "/add-player", data); // endpoint correto
};

export function usePlayerDataMutate() {
  const mutation = useMutation({
    mutationFn: postData,
  });

  return mutation;
}
