import { useQuery } from "@tanstack/react-query";
import {  getAllusers} from "@/services/adminService";
export const useUserList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllusers,
    retry: false,
  });

  const { users } = data || {};

  return { users, isLoading };
};