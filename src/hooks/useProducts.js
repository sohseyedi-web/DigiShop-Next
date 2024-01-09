import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/productServices";

export const useGetProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { products } = data || {};

  return { isLoading, products };
};
