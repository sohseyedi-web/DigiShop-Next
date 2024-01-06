import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/authServices";

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user, cart } = data || {};

  return { isLoading, user, cart };
};
