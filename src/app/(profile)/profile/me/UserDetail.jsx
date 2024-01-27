"use client";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { useState } from "react";

const UserDetail = () => {
  const { user, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.eamil,
    phoneNumber: user?.phoneNumber,
    biography: user?.biography,
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoading || !user) return <Loading />;

  return (
    <form className="space-y-4 flex items-center gap-x-3 flex-wrap">
      <div className="lg:w-[45%] w-full">
        <TextField
          label={"نام کاربری"}
          name={"name"}
          value={formData.name}
          onChange={onChangeHandler}
        />
      </div>
      <div className="lg:w-[45%] w-full">
        <TextField
          label={"ایمیل"}
          name={"email"}
          value={formData.email}
          onChange={onChangeHandler}
        />
      </div>
      <div className="lg:w-[45%] w-full">
        <TextField
          label={"شماره موبایل"}
          name={"phoneNumber"}
          value={formData.phoneNumber}
          onChange={onChangeHandler}
        />
      </div>
      <div className="lg:w-[45%] w-full">
        <TextField
          label={"اطلاعات بیشتر"}
          name={"biography"}
          value={formData.biography}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default UserDetail;
