import axios, { type AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";

interface MovementRequest {
  isActive: boolean;
  timeSecond: number;
}

const API_URL = "http://localhost:8080/game";

const postMovement = async (data: MovementRequest): AxiosPromise<void> => {
  const response = await axios.post(API_URL + "/update-movements", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};

export function useMovements() {
  const mutation = useMutation({
    mutationFn: postMovement,
  });

  return {
    ...mutation,
    sendMovement: mutation.mutate, 
  };
}
