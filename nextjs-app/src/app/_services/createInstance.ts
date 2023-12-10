"use client";
import axios from "axios";
export const createAxios = () => {
  const newInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //   Authorization: authToken ? `Bearer ${authToken}` : undefined,
    },
  });
  return newInstance;
};
