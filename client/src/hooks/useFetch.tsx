import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { url } from "../constants/constants";
import useProducts from "../Store";
import { IApiError } from "../types/types";

const useFetch = () => {
  const { addProduct } = useProducts();

  const fetchProduct = async () => {
    return await axios.get(url).then(({ data }) => {
      addProduct(data);
      return data;
    });
  };

  useEffect(() => {
    fetchProduct;
  }, [url]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
    onError: (error: IApiError) => error,
  });

  return [isLoading, isError, data, error];
};

export default useFetch;