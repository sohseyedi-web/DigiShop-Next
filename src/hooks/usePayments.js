import { useQuery } from "@tanstack/react-query";
import { getAllPayments, getPaymentById } from "@/services/paymentsServices";

export const usePayments = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: getAllPayments,
    retry: false,
  });

  const { payments } = data || {};

  return { isLoading, payments };
};


export const useGetPaymentById = (id) =>
  useQuery({
    queryKey: ["payments", id],
    queryFn: () => getPaymentById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });