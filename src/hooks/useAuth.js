import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { getUser,updateProfile} from "@/services/authServices";
import { toast } from "react-hot-toast";

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user, cart, payments } = data || {};
  const role = user?.role === "ADMIN" ? "admin" : "profile";

  return { isLoading, user, cart, role, payments };
};

export const useUpadateUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateUserProfile, isPending: isUpdating } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, updateUserProfile };
};
