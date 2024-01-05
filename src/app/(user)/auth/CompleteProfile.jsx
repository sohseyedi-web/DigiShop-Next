"use client";
import { completedUser } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import TextField from "@/ui/TextField";
import { useMutation } from "@tanstack/react-query";
import Loading from "@/ui/Loading";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completedUser,
  });

  const completedProfileHandler = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync({ name, email });
      toast.success("اطلاعات با موفقیت ثبت شد");
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-5" onSubmit={completedProfileHandler}>
      <TextField
        label={"نام کاربری "}
        name={name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label={"ایمیل"}
        name={email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="mt-2 btn btn-active btn-primary w-full text-lg h-[45px] text-white">
        {isPending ? <Loading/> : "تکمیل اطلاعات"}
      </button>
    </form>
  );
};

export default CompleteProfile;
