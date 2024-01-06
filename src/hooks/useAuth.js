import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/authServices";

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user, cart } = data || {};
  const role = user?.role === "ADMIN" ? "admin" : "profile"

  return { isLoading, user, cart,role };
};
